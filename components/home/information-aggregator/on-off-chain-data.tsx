"use client"
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion'

const MotionBadge = motion(Badge);

function OnOffChainData() {
    const onChainLabel = {
        initial: { x: -50, y: -50, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1 },
    };

    const offChainLabel = {
        initial: { x: 50, y: -50, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1 },
    }

    const kazuLabel = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 20, opacity: 1 },
    };

    return (
        <motion.div className="w-full h-full relative group"
            initial="initial"
            animate="initial"
            whileHover="animate"
        >
            <div className="flex w-full justify-center gap-x-20 mt-10 relative">
                <div className="w-20 h-20 bg-primary-foreground rounded-full relative z-10 transition-all group-hover:translate-y-1"></div>
                <div className="w-20 h-20 bg-primary-foreground rounded-full relative z-10 transition-all group-hover:translate-y-1 delay-75"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-[70%] -translate-y-[35%] w-32 h-32 border-l-[8px] border-b-[8px] border-neutral-500/50 -rotate-45 pointer-events-none rotate-animation"></div>
                <motion.div
                    className="absolute inline-flex top-1/2 left-2 z-30"
                    variants={onChainLabel}
                    transition={{ delay: 0, type: "tween" }}
                >
                    <Badge variant={`outline`}
                    >
                        On-chain Data
                    </Badge>
                </motion.div>
                <motion.div
                    className="absolute top-1/2 right-2 z-30"
                    variants={offChainLabel}
                    transition={{ delay: 0.1, type: "tween" }}
                >
                    <Badge variant={`outline`}
                    >
                        Off-chain Data
                    </Badge>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 h-52 w-52 rounded-full bg-primary-foreground transition-all group-hover:scale-125 delay-100"></div>
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-full"
                variants={kazuLabel}
                transition={{ delay: 0.2, type: "tween" }}
            >
                <Badge variant={`outline`}
                >
                    Kazu
                </Badge>
            </motion.div>
        </motion.div>
    );
}

export default OnOffChainData;