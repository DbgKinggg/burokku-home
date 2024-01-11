"use client"
import { MenuIcon, Rocket, RocketIcon, XIcon } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { useEffect, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { motion } from 'framer-motion'
import ConnectWalletButton from "./connect-wallet-button";
import Image from "next/image";
import { track } from "@vercel/analytics/react";

function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const [hideMenu, setHideMenu] = useState(true);

    useEffect(() => {
        setHideMenu(false)
    }, []);

    const menuVariants = {
        open: { opacity: 1, y: 0, h: "100%" },
        closed: { opacity: 0, y: "-150%", h: "0%" },
    }

    return (
        <nav className={cn(
            "fixed z-50 left-0 top-0 flex w-full flex-col items-center bg-root md:hidden",
            showMenu ? "h-full bg-background" : ""
        )}>
            <div className="flex w-full items-center px-4 py-4 backdrop-blur bg-neutral-950/20">
                <div className="flex-auto">
                    <Link
                        className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
                        href="/"
                    >
                        <Logo />
                    </Link>
                </div>
                <div className="flex flex-auto justify-end">
                    <Button
                        onClick={() => setShowMenu(!showMenu)}
                        type="button"
                        size={`icon`}
                        variant={`ghost`}
                    >
                        <span className="sr-only">Open main menu</span>
                        {
                            showMenu ? (
                                <XIcon className="w-6 h-6" />
                            ) : (
                                <MenuIcon className="w-6 h-6" />
                            )
                        }
                    </Button>
                </div>
            </div>
            <motion.div className={cn(
                "flex-col w-full h-full px-6 py-4 md:hidden",
                hideMenu ? "hidden" : "flex"
            )}
                animate={showMenu ? "open" : "closed"}
                variants={menuVariants}
                initial="closed"
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
                <div className="flex w-full flex-col">
                    <Link
                        className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                        href={process.env.NEXT_PUBLIC_BLOG_URL ?? '#'}
                        onClick={() => track("BlogLinkClicked", { position: "header", device: "mobile" })}
                    >
                        Blog
                    </Link>
                    <Link
                        className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                        href={process.env.NEXT_PUBLIC_DOCS_URL ?? '#'}
                        onClick={() => track("DocsLinkClicked", { position: "header", device: "mobile" })}
                    >
                        Docs
                    </Link>
                </div>
                <div className="mt-auto flex flex-col gap-y-2">
                    <div className="flex gap-x-2 justify-end">
                        <Link
                            href={`https://twitter.com/burokku_one`}
                            target="_blank"
                            aria-label={`X formerly known as Twitter`}
                            className={buttonVariants({
                                variant: 'outline',
                                size: 'icon'
                            })}
                            onClick={() => track("TwitterButtonClicked", { position: "header", device: "mobile" })}
                        >
                            <Image
                                src={`/images/social-media/twitter-x.svg`}
                                alt={`X formerly known as Twitter`}
                                width={12}
                                height={12}
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <ConnectWalletButton />
                        <Button
                            className="w-full opacity-50"
                            variant={`secondary`}
                            onClick={() => {
                                toast("📢 Coming soon!");
                            }}
                        >
                            <RocketIcon className="w-5 h-5 mr-2" />
                            Launch App
                        </Button>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
}

export default MobileMenu;