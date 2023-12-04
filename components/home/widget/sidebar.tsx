"use client"
import { Button } from "@/components/ui/button";
import { BrainCogIcon, CoinsIcon, GemIcon, RssIcon } from "lucide-react";

function Sidebar() {
    return (
        <aside className={"py-2 overflow-y-auto px-4"}>
            <div className="flex flex-col gap-y-3 items-center">
                <DraggableButton
                    name="Rss Feed"
                    icon={<RssIcon className="h-4 w-4" />}
                />
                <DraggableButton
                    name="Tokens"
                    icon={<CoinsIcon className="h-4 w-4" />}
                />
                <DraggableButton
                    name="Smart Feed"
                    icon={<BrainCogIcon className="h-4 w-4" />}
                />
                <DraggableButton
                    name="Swap"
                    icon={<RssIcon className="h-4 w-4" />}
                />
                <DraggableButton
                    name="Transfer"
                    icon={<CoinsIcon className="h-4 w-4" />}
                />
                <DraggableButton
                    name="Wallet NFT"
                    icon={<GemIcon className="h-4 w-4" />}
                />
                <DraggableButton
                    name="Wallet Activity"
                    icon={<BrainCogIcon className="h-4 w-4" />}
                />
            </div>
        </aside>
    );
}

type DraggableButtonProps = {
    name: string;
    icon: React.ReactNode;
}

function DraggableButton({ name, icon }: DraggableButtonProps) {
    return (
        <button
            className="items-center justify-center flex flex-col gap-y-3 w-full droppable-element rounded-3xl border px-4 py-4 aspect-square shadow-lg"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={e => {
                e.dataTransfer.setData("text/plain", "")

                // e.dataTransfer.setData('dragData', JSON.stringify({ widgetType: WidgetType.RSS_FEED }));
            }}
        >
            <span className="">{icon}</span>
            <span className="hidden md:flex">{name}</span>
        </button>
    )
}

export default Sidebar;