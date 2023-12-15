import SpotlightButton from "@/components/ui/spotlight-button";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

function JoinWaitlist() {
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
                />
            </div>
            <SpotlightButton className="mt-3">
                <span className="relative bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200 [font-variation-settings:'wdth'_100] group-hover:font-extrabold group-hover:[font-variation-settings:'wdth'_125]">
                    Join Waitlist
                </span>
            </SpotlightButton>
        </div>
    );
}

export default JoinWaitlist;