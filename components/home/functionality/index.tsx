import DotPattern from "@/components/ui/dot-pattern";
import { ArrowDownUp, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

function HomeFunctionality() {
    return (
        <section className="min-h-screen flex flex-col items-center">
            <div className="relative flex flex-col h-80 w-full items-center justify-center overflow-hidden">
                <DotPattern
                    size={32}
                    radius={1.5}
                    offset-x={0}
                    offset-y={0}
                    className="absolute inset-0 h-full w-full fill-white/10 [mask-image:radial-gradient(white,transparent_85%)]"
                />

                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-white/25 blur-2xl"></div>

                    <h2 className="relative text-center px-2 text-3xl md:text-4xl font-bold bg-gradient-to-b from-white/50 to-white bg-clip-text text-transparent">
                        Information Aggregator
                    </h2>
                </div>
                <p className="mt-4 max-w-xl text-center px-3 text-lg text-muted-foreground">
                    {`We make it easy for you to view all Web3 information, whether it is on-chain activities, token price, NFTs, news and so on, all things Web3.`}
                </p>
            </div>
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-3 px-4">
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

export default HomeFunctionality;