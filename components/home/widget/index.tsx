"use client"
import Sidebar from "./sidebar";
import GridLayout from "./grid-layout";
import { useBreakpoint } from "@/lib/hooks/use-breakpoint";

function SampleWidget() {
    const { isBelowSm } = useBreakpoint('sm');

    if (isBelowSm) {
        return null;
    }

    return (
        <div className="mx-auto my-10 w-full px-3 md:px-5">
            <div className="w-full h-11 rounded-t-lg border bg-neutral-900 flex justify-start items-center space-x-1.5 px-3 shadow-lg">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <div className="bg-neutral-950 flex border border-t-0 w-full rounded-b-lg">
                <div className="max-w-xs border-r hidden md:flex">
                    <Sidebar />
                </div>
                <div className="flex-grow px-2 py-2">
                    <GridLayout />
                </div>
            </div>
        </div>
    );
}

export default SampleWidget;