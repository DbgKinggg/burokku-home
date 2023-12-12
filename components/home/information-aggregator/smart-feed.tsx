import { RssIcon } from "lucide-react";
import Image from "next/image";

function SmartFeed() {
    return (
        <div className="w-full h-44 px-4 py-5 flex flex-col gap-y-2">
            <SmartFeedItem
                network={{
                    name: "Ethereum",
                    iconSrc: "/images/networks/ethereum.png"
                }}
                time="10 minutes ago"
                content={
                    <>
                        <span className="text-blue-500">Tether</span>
                        {` just minted 100M `}
                        <div className="w-4 h-4 inline-block rounded-full overflow-hidden relative">
                            <Image
                                src={'/images/tokens/usdt.png'}
                                alt={'USDT'}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="aspect-square w-full h-full"
                            />
                        </div>
                        <span>{` USDT`}</span>
                    </>
                }
            />
            <RssFeedItem
                icon={<RssIcon className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />}
                description="Bitcoin mining difficulty declined for first time since September"
                thumbnailSrc="/images/sample/rss-feed-sample-01.webp"
                time="1 hour ago"
            />
            <SmartFeedItem
                network={{
                    name: "Ethereum",
                    iconSrc: "/images/networks/ethereum.png"
                }}
                time="1 day ago"
                content={
                    <>
                        <span className="text-blue-500">0x00...1234</span>
                        {` bought 5 Azuki from `}
                        <span className="text-blue-500">0x00...9999</span>
                        {` on OpenSea`}
                    </>
                }
            />
            <RssFeedItem
                icon={<RssIcon className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />}
                description="Learn Web3 Development Basics - Make a DApp with Solidity + React"
                thumbnailSrc="/images/sample/rss-feed-sample-02.jpeg"
                time="2 days ago"
            />
        </div>
    );
}

type RssFeedItemProps = {
    icon: React.ReactNode;
    source?: string;
    time: string;
    description: string;
    thumbnailSrc: string;
}

function RssFeedItem({
    icon,
    source,
    time,
    description,
    thumbnailSrc
}: RssFeedItemProps) {
    return (
        <div className="flex flex-col relative space-x-2 rounded-2xl pt-5 pb-2 px-1 md:py-3 md:px-3 transition"
        >
            <div className="flex text-sm gap-x-2 text-muted-foreground items-end">
                {icon}
                {
                    source && (
                        <span>RSS</span>
                    )
                }
                <div className="flex justify-between mt-1">
                    <p className="text-sm">
                        {time}
                    </p>
                </div>
            </div>
            <div className="flex mt-4 gap-x-3">
                <img
                    alt={'Sample feed'}
                    className="rounded-md w-8 h-8 md:w-12 md:h-12 aspect-square object-cover"
                    src={thumbnailSrc}
                />
                <p className="md:text-lg font-semibold">
                    {description}
                </p>
            </div>
        </div>
    );
}

type SmartFeedItemProps = {
    network: {
        name: string;
        iconSrc: string;
    },
    time: string;
    content: React.ReactNode;
};

function SmartFeedItem({ network, time, content }: SmartFeedItemProps) {
    return (
        <div className="w-full rounded-3xl px-1 py-2 md:px-4 md:py-4">
            <div className="flex text-sm gap-x-2 text-muted-foreground">
                <div className="capitalize flex gap-x-2">
                    <div className="w-5 h-5 rounded-full overflow-hidden relative">
                        <Image
                            src={network.iconSrc}
                            alt={network.name}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="aspect-square w-full h-full"
                        />
                    </div>
                    <span>{network.name}</span>
                </div>
                <span className="">
                    {time}
                </span>
            </div>
            <div className="break-all mt-3">
                {content}
            </div>
        </div>
    );
}


export default SmartFeed;