import * as uri from "valid-url";
import {
  SiwvErrorType,
  type SiwvResponse,
  type VerifyParams,
  SiwvError,
} from "./types";
import { type Address, getAddress, verifyMessage } from "viem";
import {
  isValidISO8601Date,
  isEIP55Address,
  parseIntegerNumber,
} from "./utils";

export type SiwvMessageParams = Partial<SiwvMessage> & {
  domain: string;
  address: string;
  uri: string;
  version: string;
  chainId: number;
  nonce: string;
};

/**
 * Siwv: Sign In With Viem/Sign In With Vibe 😉
 *
 * This is a re-implementation of the Siwe Message class
 * Siwe is using ethers.js, which is not compatible with the library that we are currently using (viem)
 */
export class SiwvMessage {
  /**RFC 4501 dns authority that is requesting the signing. */
  domain: string;
  /**Ethereum address performing the signing conformant to capitalization
   * encoded checksum specified in EIP-55 where applicable. */
  address: string;
  /**Human-readable ASCII assertion that the user will sign, and it must not
   * contain `\n`. */
  statement?: string;
  /**RFC 3986 URI referring to the resource that is the subject of the signing
   *  (as in the __subject__ of a claim). */
  uri: string;
  /**Current version of the message. */
  version: string;
  /**EIP-155 Chain ID to which the session is bound, and the network where
   * Contract Accounts must be resolved. */
  chainId: number;
  /**Randomized token used to prevent replay attacks, at least 8 alphanumeric
   * characters. */
  nonce: string;
  /**ISO 8601 datetime string of the current time. */
  issuedAt?: string;
  /**ISO 8601 datetime string that, if present, indicates when the signed
   * authentication message is no longer valid. */
  expirationTime?: string;
  /**ISO 8601 datetime string that, if present, indicates when the signed
   * authentication message will become valid. */
  notBefore?: string;
  /**System-specific identifier that may be used to uniquely refer to the
   * sign-in request. */
  requestId?: string;
  /**List of information or references to information the user wishes to have
   * resolved as part of authentication by the relying party. They are
   * expressed as RFC 3986 URIs separated by `\n- `. */
  resources?: Array<string>;

  /**
   * Creates a parsed Sign-In with Ethereum Message (EIP-4361) object from a
   * string or an object. If a string is used an ABNF parser is called to
   * validate the parameter, otherwise the fields are attributed.
   * @param param {string | SiwvMessage} Sign message as a string or an object.
   */
  constructor(param: SiwvMessageParams) {
    this.domain = param.domain;
    this.address = param.address;
    this.statement = param?.statement;
    this.uri = param.uri;
    this.version = param.version;
    this.chainId = param.chainId;
    this.nonce = param.nonce;
    this.issuedAt = param?.issuedAt;
    this.expirationTime = param?.expirationTime;
    this.notBefore = param?.notBefore;
    this.requestId = param?.requestId;
    this.resources = param?.resources;
    if (typeof this.chainId === "string") {
      this.chainId = parseIntegerNumber(this.chainId);
    }

    this.validateMessage();
  }

  /**
   * This function can be used to retrieve an EIP-4361 formated message for
   * signature, although you can call it directly it's advised to use
   * [prepareMessage()] instead which will resolve to the correct method based
   * on the [type] attribute of this object, in case of other formats being
   * implemented.
   * @returns {string} EIP-4361 formated message, ready for EIP-191 signing.
   */
  toMessage(): string {
    /** Validates all fields of the object */
    this.validateMessage();

    const header = `${this.domain} wants you to sign in with your Ethereum account:`;
    const uriField = `URI: ${this.uri}`;
    let prefix = [header, this.address].join("\n");
    const versionField = `Version: ${this.version}`;

    const chainField = `Chain ID: ` + this.chainId || "1";

    const nonceField = `Nonce: ${this.nonce}`;

    const suffixArray = [uriField, versionField, chainField, nonceField];

    this.issuedAt = this.issuedAt ?? new Date().toISOString();

    suffixArray.push(`Issued At: ${this.issuedAt}`);

    if (this.expirationTime) {
      const expiryField = `Expiration Time: ${this.expirationTime}`;

      suffixArray.push(expiryField);
    }

    if (this.notBefore) {
      suffixArray.push(`Not Before: ${this.notBefore}`);
    }

    if (this.requestId) {
      suffixArray.push(`Request ID: ${this.requestId}`);
    }

    if (this.resources) {
      suffixArray.push(
        [`Resources:`, ...this.resources.map((x) => `- ${x}`)].join("\n"),
      );
    }

    const suffix = suffixArray.join("\n");
    prefix = [prefix, this.statement].join("\n\n");
    if (this.statement) {
      prefix += "\n";
    }
    return [prefix, suffix].join("\n");
  }

  /**
   * This method parses all the fields in the object and creates a messaging for signing
   * message according with the type defined.
   * @returns {string} Returns a message ready to be signed according with the
   * type defined in the object.
   */
  prepareMessage(): string {
    let message: string;
    switch (this.version) {
      case "1": {
        message = this.toMessage();
        break;
      }

      default: {
        message = this.toMessage();
        break;
      }
    }
    return message;
  }

  /**
   * Validates the values of this object fields.
   * @throws Throws an {ErrorType} if a field is invalid.
   */
  private validateMessage() {
    /** `domain` check. */
    if (
      !this.domain ||
      this.domain.length === 0 ||
      !/[^#?]*/.test(this.domain)
    ) {
      throw new SiwvError(
        SiwvErrorType.INVALID_DOMAIN,
        `${this.domain} to be a valid domain.`,
      );
    }

    /** EIP-55 `address` check. */
    if (!isEIP55Address(this.address)) {
      throw new SiwvError(
        SiwvErrorType.INVALID_ADDRESS,
        getAddress(this.address),
        this.address,
      );
    }

    /** Check if the URI is valid. */
    if (!uri.isUri(this.uri)) {
      throw new SiwvError(
        SiwvErrorType.INVALID_URI,
        `${this.uri} to be a valid uri.`,
      );
    }

    /** Check if the version is 1. */
    if (this.version !== "1") {
      throw new SiwvError(
        SiwvErrorType.INVALID_MESSAGE_VERSION,
        "1",
        this.version,
      );
    }

    /** Check if the nonce is alphanumeric and bigger then 8 characters */
    const nonce = this?.nonce?.match(/[a-zA-Z0-9]{8,}/);
    if (!nonce || this.nonce.length < 8 || nonce[0] !== this.nonce) {
      throw new SiwvError(
        SiwvErrorType.INVALID_NONCE,
        `Length > 8 (${nonce ? nonce.length : "null"}). Alphanumeric.`,
        this.nonce,
      );
    }

    /** `issuedAt` conforms to ISO-8601 and is a valid date. */
    if (this.issuedAt) {
      if (!isValidISO8601Date(this.issuedAt)) {
        throw new Error(SiwvErrorType.INVALID_TIME_FORMAT);
      }
    }

    /** `expirationTime` conforms to ISO-8601 and is a valid date. */
    if (this.expirationTime) {
      if (!isValidISO8601Date(this.expirationTime)) {
        throw new Error(SiwvErrorType.INVALID_TIME_FORMAT);
      }
    }

    /** `notBefore` conforms to ISO-8601 and is a valid date. */
    if (this.notBefore) {
      if (!isValidISO8601Date(this.notBefore)) {
        throw new Error(SiwvErrorType.INVALID_TIME_FORMAT);
      }
    }
  }

  /**
   * Verifies the integrity of the object by matching its signature.
   *
   * @param params Parameters to verify the integrity of the message, signature is required.
   * @returns
   */
  async verify(params: VerifyParams): Promise<SiwvResponse> {
    const { signature, domain, nonce, time } = params;

    /** Domain binding */
    if (domain && domain !== this.domain) {
      return {
        success: false,
        error: SiwvErrorType.DOMAIN_MISMATCH,
      };
    }

    /** Nonce binding */
    if (nonce && nonce !== this.nonce) {
      return {
        success: false,
        error: SiwvErrorType.NONCE_MISMATCH,
      };
    }

    /** Check time or now */
    const checkTime = new Date(time ?? new Date());

    /** Message not expired */
    if (this.expirationTime) {
      const expirationDate = new Date(this.expirationTime);
      if (checkTime.getTime() >= expirationDate.getTime()) {
        return {
          success: false,
          error: SiwvErrorType.EXPIRED_MESSAGE,
        };
      }
    }

    /** Message is valid already */
    if (this.notBefore) {
      const notBefore = new Date(this.notBefore);
      if (checkTime.getTime() < notBefore.getTime()) {
        return {
          success: false,
          error: SiwvErrorType.NOT_YET_VALID_MESSAGE,
        };
      }
    }

    let EIP4361Message;
    try {
      EIP4361Message = this.prepareMessage();
    } catch (e) {
      return {
        success: false,
        error: SiwvErrorType.UNABLE_TO_PARSE,
      };
    }

    /** Match signature with the message */
    const verifySuccess = await verifyMessage({
      address: this.address as Address,
      message: EIP4361Message,
      signature: signature as `0x${string}`,
    });

    if (!verifySuccess) {
      return {
        success: false,
        error: SiwvErrorType.INVALID_SIGNATURE,
      };
    }

    return {
      success: true,
    };
  }
}
