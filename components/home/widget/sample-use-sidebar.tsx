import { Button } from "@/components/ui/button";
import { GripHorizontalIcon } from "lucide-react";

function SampleUseSidebar() {
    return (
        <div className="h-full w-full border flex flex-col group rounded-3xl relative items-center justify-center px-4"
            onContextMenu={(e) => e.preventDefault()}
        >
            <Button variant={`ghost`} size={`icon`} className="absolute drag-handle group-hover:opacity-100 opacity-0 top-1 left-1/2 -translate-x-1/2 cursor-move">
                <GripHorizontalIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400 m-3" />
            </Button>
            <span className="text-3xl md:text-5xl mr-auto">👈🏻</span>
            <p className="text-xl text-center mt-3">Drag item from the sidebar to the right</p>
        </div>
    );
}


export default SampleUseSidebar;