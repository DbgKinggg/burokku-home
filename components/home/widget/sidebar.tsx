"use client"
import { BrainCogIcon, CoinsIcon, GemIcon, RssIcon } from "lucide-react";
import { WidgetType } from "./constants";
import { Button } from "@/components/ui/button";

function Sidebar() {
    return (
        <aside className={"py-4 overflow-y-auto px-4"}>
            <h3 className="hidden md:inline text-center md:text-xl font-bold">Widgets</h3>
            <div className="flex flex-col gap-y-3 mt-4">
                {/* <DraggableButton
                    name="Rss Feed"
                    icon={<RssIcon className="h-4 w-4" />}
                    type={WidgetType.TOKEN}
                /> */}
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
                    type={WidgetType.WALLET_ACTIVITY}
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
        <Button variant="ghost" className="justify-start"
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
        </Button>
    )
}

export default Sidebar;