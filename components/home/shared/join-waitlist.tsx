"use client"
import SpotlightButton from "@/components/ui/spotlight-button";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import AppApi from "@/lib/apis/app-api";
import { useState } from "react";
import { toast } from "sonner";

const appApi = new AppApi();

function JoinWaitlist() {
    const [email, setEmail] = useState("");

    async function handleJoinWaitlist() {
        const result = await appApi.subscribeEmail(email);

        if (result.success) {
            toast.success("You have successfully joined the waitlist!");
        } else {
            toast.error("Something went wrong due to: " + result.message);
        }
    }

    return (
        <div className="flex flex-col items-center gap-y-2">
            <div className="relative flex items-center mt-6">
                <Mail
                    className="absolute left-3 text-muted-foreground w-5 h-5"
                />
                <Input
                    placeholder="Your email"
                    type="email"
                    className="w-full pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                />
            </div>
            <SpotlightButton className="mt-3"
                onClick={handleJoinWaitlist}
            >
                <span className="relative bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200 [font-variation-settings:'wdth'_100] group-hover:font-extrabold group-hover:[font-variation-settings:'wdth'_125]">
                    Join Waitlist
                </span>
            </SpotlightButton>
        </div>
    );
}

export default JoinWaitlist;