"use client"
import { useScroll, motion, useTransform } from "framer-motion";
import MultiToken from "../widget/multi-token";
import Token from "../widget/token";
import TokenSwap from "../widget/token-swap";
import WalletActivity from "../widget/wallet-activity";
import WalletNFTs from "../widget/wallet-nft";
import { useRef } from "react";

function WidgetsMain() {
    const walletActivityRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.45, 0.5],
        [0, 0.5, 1, 0]
    );

    const walletActivityY = useTransform(scrollYProgress, [0, 1], [50, -320]);
    const tokenY = useTransform(scrollYProgress, [0, 1], [400, -450]);
    const nftY = useTransform(scrollYProgress, [0, 1], [300, -600]);
    const tokenSwapY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const multiTokenY = useTransform(scrollYProgress, [0, 1], [300, -300]);

    return (
        <div className="flex gap-x-8 overflow-x-hidden pt-20 relative z-20"
            ref={walletActivityRef}
        >
            <motion.div className="w-80 h-[400px] flex-shrink-0"
                style={{
                    translateY: walletActivityY,
                    translateX: '-56px',
                    opacity
                }}
            >
                <WalletActivity showMoveHandle={false} />
            </motion.div>
            <motion.div className="w-64 h-64 flex-shrink-0"
                style={{
                    translateY: tokenY,
                    translateX: '-56px',
                    opacity
                }}
            >
                <Token showMoveHandle={false} />
            </motion.div>
            <motion.div className="w-96 h-[500px] flex-shrink-0 -translate-x-14 -translate-y-10"
                style={{
                    translateY: tokenSwapY,
                    translateX: '-56px',
                    opacity
                }}
            >
                <TokenSwap showMoveHandle={false} />
            </motion.div>
            <motion.div className="w-96 h-[300px] flex-shrink-0"
                style={{
                    translateY: multiTokenY,
                    translateX: '-56px',
                    opacity
                }}
            >
                <MultiToken showMoveHandle={false} />
            </motion.div>
            <motion.div className="w-[500px] flex-shrink-0"
                style={{
                    translateY: nftY,
                    translateX: '-56px',
                    opacity
                }}
            >
                <WalletNFTs showMoveHandle={false} />
            </motion.div>
        </div>
    );
}

export default WidgetsMain;