"use client"
import { Button } from "@/components/ui/button";
import { BrainCogIcon, CoinsIcon, GemIcon, RssIcon } from "lucide-react";

function Sidebar() {
    return (
        <aside className={"pb-12"}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Web 2
                    </h2>
                    <div className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start droppable-element"
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
                            <RssIcon className="mr-2 h-4 w-4" />
                            Rss Feed
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <CoinsIcon className="mr-2 h-4 w-4" />
                            Tokens
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <BrainCogIcon className="mr-2 h-4 w-4" />
                            Smart Feed
                        </Button>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Web 3
                    </h2>
                    <div className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start">
                            <RssIcon className="mr-2 h-4 w-4" />
                            Swap
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <CoinsIcon className="mr-2 h-4 w-4" />
                            Transfer
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <GemIcon className="mr-2 h-4 w-4" />
                            Wallet NFT
                        </Button>
                        <Button variant="ghost" className="w-full justify-start"
                            draggable={true}
                            unselectable="on"
                            onDragStart={e => {
                                e.dataTransfer.setData("text/plain", "")

                                // e.dataTransfer.setData('dragData', JSON.stringify({ widgetType: WidgetType.WALLET_ACTIVITY }));
                            }}
                        >
                            <BrainCogIcon className="mr-2 h-4 w-4" />
                            Wallet Activity
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;