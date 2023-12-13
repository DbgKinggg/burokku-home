import { Button } from "@/components/ui/button"
import { ChevronDownIcon, SettingsIcon } from "lucide-react";
import Image from "next/image";
import DragHandle from "./drag-handle";

type TokenSwapProps = {
    showMoveHandle?: boolean;
}

function TokenSwap({ showMoveHandle = true }: TokenSwapProps) {
    return (
        <div className="h-full w-full border relative group rounded-3xl flex px-3 py-3 md:px-6 md:py-6 flex-col gap-y-2 overflow-hidden">
            {
                showMoveHandle && (
                    <DragHandle />
                )
            }
            <div className="flex justify-between items-center mb-4 text-lg md:text-2xl font-bold">
                <h3>Swap</h3>
                <SettingsIcon className="text-white" />
            </div>
            <div className="bg-secondary p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-400">You pay</span>
                    <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full overflow-hidden relative">
                            <Image
                                src={'/images/networks/ethereum.png'}
                                alt={"Ether"}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="aspect-square w-full h-full"
                            />
                        </div>
                        <Button
                            className="text-white bg-transparent hover:bg-transparent focus:bg-transparent shadow-none"
                            variant="ghost"
                        >
                            ETH
                        </Button>
                        <ChevronDownIcon className="text-white" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <input className="bg-transparent text-white text-2xl outline-none max-w-[150px]" placeholder="0" />
                    <Button
                        className="shadow-none ml-1"
                        variant="ghost"
                    >
                        Max
                    </Button>
                </div>
                <div className="flex">
                    <span className="flex items-center text-gray-400 ml-auto">
                        <span>Balance: 69</span>
                    </span>
                </div>
            </div>
            <div className="flex justify-center items-center my-2">
                <ChevronDownIcon className="text-white" />
            </div>
            <div className="bg-[#292929] p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-400">You receive</span>
                </div>
                <div className="flex justify-between items-center">
                    <input className="bg-transparent text-white text-2xl outline-none w-full max-w-[150px]" placeholder="0" />
                    <Button className="px-4 py-2 rounded-lg" variant="secondary"
                        onClick={event => event.preventDefault()}
                        onMouseDown={event => event.stopPropagation()}
                        onTouchStart={event => event.stopPropagation()}
                    >
                        <span>Select token</span>
                        <ChevronDownIcon className="ml-1 text-white" />
                    </Button>
                </div>
            </div>
            <Button className="w-full py-3 rounded-lg"
                onClick={event => event.preventDefault()}
                onMouseDown={event => event.stopPropagation()}
                onTouchStart={event => event.stopPropagation()}
            >Swap</Button>
        </div>
    )
}


export default TokenSwap;