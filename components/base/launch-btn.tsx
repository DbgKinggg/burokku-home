import { RocketIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function LaunchBtn() {
    return (
        <TooltipProvider
            delayDuration={100}
        >
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="fixed hidden md:flex right-5 top-5 disabled:pointer-events-auto"
                        variant={`secondary`}
                        disabled={true}
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