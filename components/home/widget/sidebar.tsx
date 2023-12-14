"use client"
import { ArrowLeftRight, BrainCogIcon, CandlestickChart, ChevronRightIcon, CoinsIcon, GemIcon, RssIcon, SmileIcon } from "lucide-react";
import { WidgetType } from "./constants";
import { Button } from "@/components/ui/button";

function Sidebar() {
    return (
        <aside className={"py-4 overflow-y-auto px-4"}>
            <h3 className="hidden md:inline text-center md:text-xl font-bold">Widgets</h3>
            <div className="flex flex-col gap-y-3 mt-4">
                <DraggableButton
                    name="Drag me"
                    icon={<SmileIcon className="h-4 w-4" />}
                    type={WidgetType.SAMPLE_WIDGET}
                />
                <div className="text-muted-foreground text-center">
                    <span className="hidden md:inline">and a lot more</span>...
                </div>
            </div>
        </aside>
    );
}

type DraggableButtonProps = {
    name: string;
    icon: React.ReactNode;
    type: WidgetType;
}

function DraggableButton({ name, icon, type }: DraggableButtonProps) {
    return (
        <Button variant="ghost" className="justify-start group"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={e => {
                e.dataTransfer.setData("text/plain", "")

                e.dataTransfer.setData('dragData', JSON.stringify({ widgetType: type }));
            }}
        >
            <span className="md:mr-2">{icon}</span>
            <span className="hidden md:flex">{name}</span>
            <ChevronRightIcon className="h-4 w-4 ml-5 transition-all group-hover:translate-x-2" />
        </Button>
    )
}

export default Sidebar;