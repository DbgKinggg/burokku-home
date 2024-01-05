"use client"
import SpotlightButton from "@/components/ui/spotlight-button";
import { Mail, Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppApi from "@/lib/apis/app-api";
import { useRef, useState } from "react";
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
import { useAccount } from "wagmi";
import { truncateMiddle } from "@/lib/utils";

const appApi = new AppApi();

function JoinWaitlist() {
    const { isBelowSm } = useBreakpoint('sm');

    if (isBelowSm) {
        return (
            <JoinWaitlistDrawer />
        )
    }

    return (
        <JoinWaitlistDialog />
    );
}

function JoinWaitlistDialog() {
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
                    <DialogTitle>Join Waitlist</DialogTitle>
                    <DialogDescription>
                        Connect your wallet to get started!
                    </DialogDescription>
                    <JoinWaitlistContent
                        onClose={() => setOpen(false)}
                    />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

function JoinWaitlistDrawer() {
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
                    <DrawerTitle>Join Waitlist</DrawerTitle>
                    <DrawerDescription>
                        Connect your wallet to get started!
                    </DrawerDescription>
                    <JoinWaitlistContent
                        onClose={handleClose}
                    />
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
}

function JoinWaitlistContent({ onClose }: JoinWaitlistContentProps) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { address } = useAccount();

    async function handleJoinWaitlist() {
        setLoading(true);
        const result = await appApi.subscribeEmail(email);

        if (result.success) {
            toast.success("You have successfully joined the waitlist!");
        } else {
            toast.error(result.message ?? "Something went wrong");
        }
        setLoading(false);
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
                {/* <Button
                    variant={`outline`}
                    size={`sm`}
                    onClick={onClose}
                >
                    Connect Wallet
                </Button> */}
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

export default JoinWaitlist;