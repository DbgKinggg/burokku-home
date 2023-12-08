import { Button } from "@/components/ui/button";
import { GripHorizontalIcon } from "lucide-react";

function DragHandle() {
    return (
        <Button variant={`ghost`} size={`icon`} className="absolute drag-handle group-hover:opacity-100 opacity-0 top-1 left-1/2 -translate-x-1/2 cursor-move"
            aria-label="Drag handle"
        >
            <GripHorizontalIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400 m-3" />
        </Button>
    );
}

export default DragHandle;