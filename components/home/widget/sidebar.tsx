"use client"
import { Button } from "@/components/ui/button";
import { BrainCogIcon, CoinsIcon, GemIcon, RssIcon } from "lucide-react";
import { WidgetType } from "./constants";

function Sidebar() {
    return (
        <aside className={"py-2 overflow-y-auto px-4"}>
            <div className="flex flex-col gap-y-3 items-center">
                <DraggableButton
                    name="Rss Feed"
                    icon={<RssIcon className="h-4 w-4" />}
                    type={WidgetType.TOKEN}
                />
                <DraggableButton
                    name="Tokens"
                    icon={<CoinsIcon className="h-4 w-4" />}
                    type={WidgetType.TOKEN}
                />
                <DraggableButton
                    name="Smart Feed"
                    icon={<BrainCogIcon className="h-4 w-4" />}
                    type={WidgetType.TOKEN}
                />
                <DraggableButton
                    name="Swap"
                    icon={<RssIcon className="h-4 w-4" />}
                    type={WidgetType.TOKEN}
                />
                <DraggableButton
                    name="Transfer"
                    icon={<CoinsIcon className="h-4 w-4" />}
                    type={WidgetType.TOKEN}
                />
                <DraggableButton
                    name="Wallet NFT"
                    icon={<GemIcon className="h-4 w-4" />}
                    type={WidgetType.TOKEN}
                />
                <DraggableButton
                    name="Wallet Activity"
                    icon={<BrainCogIcon className="h-4 w-4" />}
                    type={WidgetType.TOKEN}
                />
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
        <button
            className="items-center justify-center overflow-hidden flex flex-col gap-y-3 w-full droppable-element rounded-3xl border px-4 py-4 aspect-square shadow-lg"
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
            <span className="">{icon}</span>
            <span className="hidden md:flex">{name}</span>
        </button>
    )
}

export default Sidebar;