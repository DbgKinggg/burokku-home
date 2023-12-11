import DottedTitle from "@/components/home/shared/dotted-title";
import DotPattern from "@/components/ui/dot-pattern";
import { ArrowDownUp, KeyRoundIcon, Link, NewspaperIcon, SearchIcon, SmileIcon, WalletCardsIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

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
                    <SearchCommand />
                </BantoBox>
                <BantoBox
                    title="Smart Feed"
                    description="Get real-time on-chain data with our app, providing instant insights into Token/NFT prices, wallet activities, and more."
                    icon={<Link className="w-6 h-6" />}
                ></BantoBox>
                <BantoBox
                    title="On/Off chain Data"
                    description="Get real-time on-chain data with our app, providing instant insights into Token/NFT prices, wallet activities, and more."
                    icon={<Link className="w-6 h-6" />}
                ></BantoBox>
            </div>
        </section>
    )
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
                className="left-1/2 top-0 w-[150px] user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                style={{ "background": "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)" }}
            />
            <div className="relative h-72 overflow-hidden">
                <div className="absolute w-full translate-x-1/4 translate-y-[5%]">
                    {children}
                </div>
                <div aria-hidden="true" className="absolute left-0 top-0 h-full w-full pointer-events-none"
                    style={{
                        background: "linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 40%, rgba(10,10,10,0) 100%, rgba(10,10,10,1) 100%)"
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