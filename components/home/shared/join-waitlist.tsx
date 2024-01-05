"use client"
import SpotlightButton from "@/components/ui/spotlight-button";
import { ChevronLeftIcon, Mail, Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppApi from "@/lib/apis/app-api";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useBreakpoint } from "@/lib/hooks/use-breakpoint";
import RichButton from "@/components/ui/rich-button";
import ConnectWalletButton from "@/components/base/connect-wallet-button";
import { useAccount, useWalletClient } from "wagmi";
import { generateHash, truncateMiddle } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { SiwvMessage } from "@/lib/web3/siwv-message";
import { useReward } from 'react-rewards'

const appApi = new AppApi();

function JoinWaitlist() {
    const { isBelowSm } = useBreakpoint('sm');
    const [haveShared, setHaveShared] = useState(false);

    if (isBelowSm) {
        return (
            <JoinWaitlistDrawer haveShared={haveShared} setHaveShared={setHaveShared} />
        )
    }

    return (
        <JoinWaitlistDialog haveShared={haveShared} setHaveShared={setHaveShared} />
    );
}

type JoinWaitlistDialogProps = {
    haveShared: boolean;
    setHaveShared: (value: boolean) => void;
}

function JoinWaitlistDialog({ haveShared, setHaveShared }: JoinWaitlistDialogProps) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <SpotlightButton className="mt-3">
                    <span className="relative bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200 [font-variation-settings:'wdth'_100] group-hover:font-extrabold group-hover:[font-variation-settings:'wdth'_125]">
                        Join Waitlist
                    </span>
                </SpotlightButton>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        {
                            haveShared ? (
                                <Button size="icon" variant={`ghost`}
                                    onClick={() => setHaveShared(false)}
                                >
                                    <ChevronLeftIcon />
                                </Button>
                            ) : (
                                <span>Join Waitlist</span>
                            )
                        }
                    </DialogTitle>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={haveShared ? 'shared' : "not-shared"}
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {
                                haveShared ? (
                                    <JoinWaitlistSuccess />
                                ) : (
                                    <>
                                        <DialogDescription>
                                            Connect your wallet to get started!
                                        </DialogDescription>
                                        <JoinWaitlistContent
                                            onClose={() => setOpen(false)}
                                            setHaveShared={setHaveShared}
                                        />
                                    </>
                                )
                            }
                        </motion.div>
                    </AnimatePresence>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

type JoinWaitlistDrawerProps = {
    haveShared: boolean;
    setHaveShared: (value: boolean) => void;
}


function JoinWaitlistDrawer({ haveShared, setHaveShared }: JoinWaitlistDrawerProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    function handleClose() {
        if (buttonRef.current === null) return;

        const newEvent = new Event('click', { bubbles: true });
        buttonRef.current.dispatchEvent(newEvent);
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <SpotlightButton className="mt-3">
                    <span className="relative bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200 [font-variation-settings:'wdth'_100] group-hover:font-extrabold group-hover:[font-variation-settings:'wdth'_125]">
                        Join Waitlist
                    </span>
                </SpotlightButton>
            </DrawerTrigger>
            <DrawerContent className="sm:max-w-[425px]">
                <DrawerHeader>
                    {
                        haveShared ? (
                            <Button size="icon" variant={`ghost`}
                                onClick={() => setHaveShared(false)}
                            >
                                <ChevronLeftIcon />
                            </Button>
                        ) : (
                            <DrawerTitle>Join Waitlist</DrawerTitle>
                        )
                    }
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={haveShared ? 'shared' : "not-shared"}
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {
                                haveShared ? (
                                    <JoinWaitlistSuccess />
                                ) : (
                                    <>
                                        <DrawerDescription>
                                            Connect your wallet to get started!
                                        </DrawerDescription>
                                        <JoinWaitlistContent
                                            onClose={handleClose}
                                            setHaveShared={setHaveShared}
                                        />
                                    </>
                                )
                            }
                        </motion.div>
                    </AnimatePresence>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose
                        ref={buttonRef}
                    >Close</DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

type JoinWaitlistContentProps = {
    onClose: () => void;
    setHaveShared: (value: boolean) => void;
}

function JoinWaitlistContent({ onClose, setHaveShared }: JoinWaitlistContentProps) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { address } = useAccount();
    const walletClient = useWalletClient();

    function validateInputs() {
        if (address === undefined) {
            toast.error("Please connect your wallet");
            return false;
        }

        return true;
    }

    async function handleJoinWaitlist() {
        if (!validateInputs()) return;

        setHaveShared(true);
        return;
        setLoading(true);

        try {
            const addressStr = address as string;
            // sign a message first
            const siwv = new SiwvMessage({
                domain: window.location.host,
                address: addressStr,
                statement: "I'm joining the waitlist!",
                uri: window.location.origin,
                version: "1",
                chainId: walletClient.data?.chain.id || 1,
                nonce: generateHash(10),
            });
            const message = siwv.prepareMessage();

            const signature = await walletClient.data?.signMessage({
                message,
            });

            const result = await appApi.subscribeEmail(
                addressStr,
                siwv,
                signature as string,
                email
            );

            if (result.success) {
                toast.success("You have successfully joined the waitlist!");

                setHaveShared(true);
            } else {
                toast.error(result.message ?? "Something went wrong");
            }
        } catch (error) {
            const err = error as Error;
            toast.error(err.message ?? "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-y-4 pt-6">
            <div className="flex flex-col gap-y-2">
                <div className="relative flex items-center">
                    <Wallet
                        className="absolute left-3 text-muted-foreground w-5 h-5"
                    />
                    <Input
                        placeholder={address ? truncateMiddle(address) : `Please connect your wallet`}
                        type="text"
                        className="w-full pl-10 pr-6"
                        onChange={(e) => setEmail(e.target.value)}
                        readOnly
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">*</span>
                </div>
                {
                    address && (
                        <p className="text-muted-foreground text-sm px-2">If you would like to disconnect this wallet, please change it from the main menu</p>
                    )
                }
                {
                    !address && (
                        <ConnectWalletButton
                            connectWalletOnClick={onClose}
                        />
                    )
                }
            </div>
            <div className="relative flex items-center">
                <Mail
                    className="absolute left-3 text-muted-foreground w-5 h-5"
                />
                <Input
                    placeholder="Enter your email optionally"
                    type="email"
                    className="w-full pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                />
            </div>
            <RichButton
                variant="secondary"
                isLoading={loading}
                onClick={handleJoinWaitlist}
            >
                Join
            </RichButton>
        </div>
    );
}

function JoinWaitlistSuccess() {
    const { reward } = useReward('rewardId', 'emoji', {
        emoji: ['🎉', '✨', '⭐'],
    });

    useEffect(() => {
        reward();
    }, [])

    function handleShareOnTwitter() {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent("I just joined the waitlist of " + APP_NAME + "! The all-in-one Web3 Dashboard.")}&url=${encodeURIComponent(window.location.href)}&hashtags=${encodeURIComponent(APP_NAME)}`;
        window.open(url, "_blank");
    }

    return (
        <div className="pt-10 flex flex-col gap-y-3">
            <div className="text-2xl md:text-4xl font-bold text-center bg-clip-text bg-gradient-to-r text-transparent from-zinc-400 to-zinc-100">Thanks for Joining!</div>
            <p className="text-muted-foreground text-center">
                You are the most amazing person! Sharing this good news with your friends!
            </p>
            <Button
                variant={`outline`}
                className="mt-[30px]"
                onClick={handleShareOnTwitter}
            >
                <span id="rewardId" />
                <XIcon />
                <span className="ml-2">Share</span>
            </Button>
        </div>
    );
}

function XIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 1200 1227"
        >
            <path
                fill="#fff"
                d="M714.163 519.284L1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026zM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026z"
            ></path>
        </svg>
    );
}

export default JoinWaitlist;