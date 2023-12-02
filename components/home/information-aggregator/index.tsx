import DottedTitle from "@/components/home/shared/dotted-title";
import DotPattern from "@/components/ui/dot-pattern";
import { ArrowDownUp, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

function HomeInformationAggregator() {
    return (
        <section className="min-h-screen flex flex-col items-center max-w-5xl mx-auto">
            <DottedTitle
                title="Information Aggregator"
                description={`We make it easy for you to view all Web3 information, whether it is on-chain activities, token price, NFTs, news and so on, all things Web3.`}
            />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 px-4">
                <BantoBox
                    title="On-chain Data"
                    description="Get real-time on-chain data with our app, providing instant insights into Token/NFT prices, wallet activities, and more."
                    icon={<Link className="w-6 h-6" />}
                />
                <BantoBox
                    title="Off-chain Data"
                    description="Delivering the latest off-chain data including news, articles, social media content, and trending topics."
                    icon={<ArrowDownUp className="w-6 h-6" />}
                />
            </div>
        </section>
    )
}

interface BantoBoxProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

function BantoBox({
    title,
    description,
    icon
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
            <div className="relative h-60 overflow-hidden">
                <Image
                    src="/images/placeholder/600x400.svg"
                    alt="placeholder"
                    width={0}
                    height={0}
                    sizes={`100vw`}
                    className="w-full opacity-10"
                />
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