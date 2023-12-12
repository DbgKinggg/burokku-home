import DottedTitle from "@/components/home/shared/dotted-title";
import { Badge } from "@/components/ui/badge";
import DotPattern from "@/components/ui/dot-pattern";
import { ArrowDownUp, KeyRoundIcon, LayoutGridIcon, Link, NewspaperIcon, RssIcon, SearchIcon, SmileIcon, WalletCardsIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import SmartFeed from "./smart-feed";

function HomeInformationAggregator() {
    return (
        <section className="min-h-screen flex flex-col items-center max-w-5xl mx-auto">
            <DottedTitle
                title="Information Aggregator"
                description={`We make it easy for you to view all Web3 information, whether it is on-chain activities, token price, NFTs, news and so on, all things Web3.`}
            />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 md:gap-y-5 px-4">
                <BantoBox
                    title="On/Off chain Data"
                    description="Get real-time on-chain data with our app, providing instant insights into Token/NFT prices, wallet activities, and more."
                    icon={<Link className="w-6 h-6" />}
                ></BantoBox>
                <BantoBox
                    title="Search the way you like"
                    description="Delivering the latest off-chain data including news, articles, social media content, and trending topics."
                    icon={<SearchIcon className="w-6 h-6" />}
                >
                    <div className="absolute w-full translate-x-1/4 translate-y-[5%]">
                        <SearchCommand />
                    </div>
                </BantoBox>
                <BantoBox
                    title="Smart Feed"
                    description="Get real-time on-chain data with our app, providing instant insights into Token/NFT prices, wallet activities, and more."
                    icon={<RssIcon className="w-6 h-6" />}
                >
                    <SmartFeed />
                </BantoBox>
                <BantoBox
                    title="All the things you love"
                    description="Get access to a big list of blockchains and platforms you love."
                    icon={<LayoutGridIcon className="w-6 h-6" />}
                >
                    <Platforms />
                </BantoBox>
            </div>
        </section >
    )
}

const platforms = [
    {
        name: "Arbitrum",
        icon: '/images/networks/arbitrum.png'
    },
    {
        name: "Polygon",
        icon: '/images/networks/polygon.png'
    },
    {
        name: "Ethereum",
        icon: '/images/networks/ethereum.png'
    },
    {
        name: "Binance Smart Chain",
        icon: '/images/networks/bsc.png'
    },
    {
        name: "Avalanche",
        icon: '/images/networks/avalanche.png'
    },
    {
        name: "Arweave",
        icon: '/images/networks/arweave.png'
    },
    {
        name: "Optimism",
        icon: '/images/networks/optimism.png'
    },
    {
        name: "Lens",
        icon: '/images/platforms/lens-protocol.png'
    },
    {
        name: "ZKSync",
        icon: '/images/networks/zksync.png'
    },
    {
        name: "Gnosis",
        icon: '/images/networks/gnosis.jpeg'
    },
    {
        name: "Crossbell",
        icon: '/images/networks/crossbell.png'
    },
    {
        name: "Scroll",
        icon: '/images/networks/scroll.png'
    },
    {
        name: "Farcaster",
        icon: '/images/networks/farcaster.png'
    },
    {
        name: "Base",
        icon: '/images/networks/base.png'
    },
    {
        name: "Snapshot",
        icon: '/images/networks/snapshot.jpeg'
    },
];

function Platforms() {

    return (
        <div className="w-full h-full grid gap-x-3 gap-y-4 grid-cols-5 p-4 scale-125 overflow-hidden">
            {
                platforms.map((platform, index) => (
                    <PlatformCard
                        key={index}
                        name={platform.name}
                        iconSrc={platform.icon}
                    />
                ))
            }
        </div>
    );
}

type PlatformCardProps = {
    name: string;
    iconSrc: string;
};

function PlatformCard({ name, iconSrc }: PlatformCardProps) {
    return (
        <div className="w-14 h-14 md:w-16 md:h-16 relative border-t border-x rounded-2xl p-3 transition-all delay-100 hover:scale-105 hover:-translate-y-1" aria-label={name}>
            <div
                aria-hidden="true"
                className="left-1/2 top-0 w-[25px] user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                style={{ "background": "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)" }}
            />
            <Image
                src={iconSrc}
                alt={name}
                width="0"
                height="0"
                sizes="100vw"
                className="aspect-square w-full h-full rounded-full"
            />
        </div>
    );
}

function SearchCommand() {
    return (
        <div className="w-full max-w-xl h-72 rounded-2xl border px-1 py-1">
            <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
                <SearchIcon className="w-6 h-6" />
                <input className="flex ml-2 h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" placeholder="Type a command or search..." autoComplete="off" autoCorrect="off" spellCheck="false" type="text" />
            </div>
            <div className="px-2 py-2 mt-2">
                <div className="text-muted-foreground text-sm ml-2">Suggestions</div>
                <div className="flex flex-col gap-y-1">
                    <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" aria-selected="false" data-selected="false">
                        <WalletCardsIcon className="w-4 h-4 mr-2" />
                        <span>Wallet</span>
                    </div>
                    <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" aria-selected="false" data-selected="false">
                        <SmileIcon className="mr-2 h-4 w-4" />
                        <span>NFT</span>
                    </div>
                    <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" aria-selected="false" data-selected="false">
                        <KeyRoundIcon className="mr-2 h-4 w-4" />
                        <span>dApp</span>
                    </div>
                    <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" aria-selected="false" data-selected="false">
                        <NewspaperIcon className="mr-2 h-4 w-4" />
                        <span>News/Article</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface BantoBoxProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}

function BantoBox({
    title,
    description,
    icon,
    children
}: BantoBoxProps) {
    return (
        <div className="rounded-3xl border overflow-hidden relative"
            style={{ "background": "radial-gradient(70% 80% at center 0%, rgba(255,255,255,0.06) 3%, rgba(98, 255, 179, 0) 70%, rgba(98, 255, 179, 0) 100%)" }}
        >
            <div
                aria-hidden="true"
                className="left-1/2 top-0 w-[150px] user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ "background": "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)" }}
            />
            <div className="relative h-72 overflow-hidden">
                {children}
                <div aria-hidden="true" className="absolute left-0 top-0 h-full w-full pointer-events-none"
                    style={{
                        background: "linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 40%, rgba(10,10,10,0) 90%, rgba(10,10,10,1) 100%)"
                    }} />
            </div>
            <div className="p-4 flex flex-col gap-y-2">
                {icon}
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default HomeInformationAggregator;