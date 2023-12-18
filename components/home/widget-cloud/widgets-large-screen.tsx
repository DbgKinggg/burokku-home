"use client"
import { useScroll, motion, useTransform } from "framer-motion";
import MultiToken from "../widget/multi-token";
import Token from "../widget/token";
import TokenSwap from "../widget/token-swap";
import WalletActivity from "../widget/wallet-activity";
import WalletNFTs from "../widget/wallet-nft";
import { useRef } from "react";
import { useBreakpoint } from "@/lib/hooks/use-breakpoint";

function WidgetsLargeScreen() {
    const { scrollYProgress } = useScroll();
    const { isBelowLg } = useBreakpoint('lg');
    const { isBelowSm } = useBreakpoint('sm');

    const opacity = useTransform(
        scrollYProgress,
        isBelowSm ? [0, 0.2, 0.65, 0.75] : [0, 0.2, 0.6, 0.75],
        isBelowSm ? [0, 0.5, 1, 0] : [0, 0.5, 1, 0]
    );

    const walletActivityY = useTransform(
        scrollYProgress,
        [0, 1],
        isBelowLg ? [0, -100] : [100, -100]
    );
    const tokenY = useTransform(
        scrollYProgress,
        [0, 1],
        isBelowLg ? [0, -100] : [400, -450]
    );
    const nftY = useTransform(
        scrollYProgress,
        [0, 1],
        isBelowLg ? [0, -100] : [300, -500]
    );
    const tokenSwapY = useTransform(
        scrollYProgress,
        [0, 1],
        isBelowLg ? [0, -100] : [100, -300]
    );
    const multiTokenY = useTransform(
        scrollYProgress,
        [0, 1],
        isBelowLg ? [0, -100] : [300, -300]
    );

    return (
        <div className="flex flex-wrap px-4 gap-y-8 lg:flex-nowrap gap-x-8 justify-center overflow-hidden pt-32 relative z-20">
            <motion.div className="hidden md:flex w-full md:w-96 h-[500px] flex-shrink-0 -translate-x-14 -translate-y-10 relative z-10"
                style={{
                    translateY: tokenSwapY,
                    opacity
                }}
            >
                <TokenSwap showMoveHandle={false} />
            </motion.div>
            <motion.div className="w-full h-[350px] md:w-72 md:h-[400px] lg:w-96 lg:h-[400px] flex-shrink-0"
                style={{
                    translateY: walletActivityY,
                    opacity
                }}
            >
                <WalletActivity showMoveHandle={false} />
            </motion.div>
            <motion.div className="w-full md:w-64 h-64 flex-shrink-0"
                style={{
                    translateY: tokenY,
                    opacity
                }}
            >
                <Token showMoveHandle={false} />
            </motion.div>
            <motion.div className="w-full h-56 md:w-80 md:h-[300px] flex-shrink-0"
                style={{
                    translateY: multiTokenY,
                    opacity
                }}
            >
                <MultiToken showMoveHandle={false} />
            </motion.div>
            <motion.div className="hidden md:flex w-full md:w-[400px] lg:w-[500px] flex-shrink-0 relative z-0"
                style={{
                    translateY: nftY,
                    opacity
                }}
            >
                <WalletNFTs showMoveHandle={false} />
            </motion.div>
        </div>
    );
}

export default WidgetsLargeScreen;