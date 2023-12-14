"use client"
import { MenuIcon, Rocket, RocketIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { motion } from 'framer-motion'

function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false);

    const menuVariants = {
        open: { opacity: 1, y: 0, h: "100%" },
        closed: { opacity: 0, y: "-150%", h: "0%" },
    }

    return (
        <nav className={cn(
            "fixed z-50 left-0 top-0 flex w-full flex-col items-center bg-root md:hidden",
            showMenu ? "h-full bg-background" : ""
        )}>
            <div className="flex w-full items-center px-4 py-4">
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
            <motion.div className="flex flex-col w-full h-full px-6 py-4 md:hidden"
                animate={showMenu ? "open" : "closed"}
                variants={menuVariants}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
                <div className="flex w-full flex-col">
                    <Link
                        className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                        href="/"
                    >
                        Blog
                    </Link>
                    <Link
                        className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                        href="/"
                    >
                        Docs
                    </Link>
                </div>
                <Button
                    className="mt-auto w-full opacity-50"
                    size={`lg`}
                    variant={`secondary`}
                    onClick={() => {
                        toast("📢 Coming soon!");
                    }}
                >
                    <RocketIcon className="w-5 h-5 mr-2" />
                    Launch App
                </Button>
            </motion.div>
        </nav>
    );
}

export default MobileMenu;