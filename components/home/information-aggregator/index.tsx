import DottedTitle from "@/components/home/shared/dotted-title";
import { LayoutGridIcon, Link, SearchIcon, SparkleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import SmartFeed from "./smart-feed";
import SearchCommand from "./search-command";
import OnOffChainData from "./on-off-chain-data";

function HomeInformationAggregator() {
    return (
        <section className="min-h-screen flex flex-col items-center max-w-5xl mx-auto">
            <DottedTitle
                title="Information Aggregator"
                description={`We make it easy for you to view all Web3 information, whether it is on-chain activities, token price, NFTs, news and so on, all things Web3.`}
            />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 md:gap-y-5 px-4">
                <BantoBox
                    title="Chain Data Interplay"
                    description="Experience seamless integration of real-time on-chain and off-chain data. We provide immediate insights into Token/NFT prices, wallet activities, and more."
                    icon={<Link className="w-6 h-6" />}
                >
                    <OnOffChainData />
                </BantoBox>
                <BantoBox
                    title="Search the way you like"
                    description="Enjoy the power of our advanced search functionality. Easily find the latest on/off-chain data including wallet activities, NFTs, dApps, news articles, social media content, and trending topics."
                    icon={<SearchIcon className="w-6 h-6" />}
                >
                    <div className="absolute w-full translate-x-1/4 translate-y-[5%]">
                        <SearchCommand />
                    </div>
                </BantoBox>
                <BantoBox
                    title="Smart Feed"
                    description="We intelligently curates a feed based on your preferences, delivering only the information that matters to you."
                    icon={<SparkleIcon className="w-6 h-6" />}
                >
                    <SmartFeed />
                </BantoBox>
                <BantoBox
                    title="All the things you love"
                    description="Gain access to a broad selection of blockchains and platforms you love, all in one place."
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