"use client"
import { RocketIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner";

function LaunchBtn() {
    return (
        <TooltipProvider
            delayDuration={100}
        >
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="opacity-50"
                        variant={`secondary`}
                        onClick={() => {
                            toast("📢 Coming soon!");
                        }}
                    >
                        <RocketIcon className="w-5 h-5 mr-2" />
                        Launch App
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>📢 Coming soon!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default LaunchBtn;