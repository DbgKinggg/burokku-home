import axios, {AxiosInstance} from "axios";
import {SiwvMessage} from "../web3/siwv-message";

type SubscribeEmailResponse = {
  success: boolean;
  message: string;
};

type SubscribeEmailPayload = {
  address: string;
  message: string;
  signature: string;
  email?: string;
};

class AppApi {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_APP_API_BASE_URL + "/api",
    });
  }

  public async subscribeEmail(
    address: string,
    message: SiwvMessage,
    signature: string,
    email: string
  ): Promise<{
    success: boolean;
    message: string;
    error?: string;
  }> {
    try {
      const payload: SubscribeEmailPayload = {
        address,
        message: JSON.stringify(message),
        signature,
      };

      if (email && email !== "") {
        payload["email"] = email;
      }

      const response = await this.client.post<SubscribeEmailResponse>(
        "/home/subscribe",
        payload
      );

      return response.data;
    } catch (error: unknown) {
      return {
        success: false,
        message: "Something went wrong",
        error: (error as Error).message,
      };
    }
  }
}

export default AppApi;
