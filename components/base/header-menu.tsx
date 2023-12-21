"use client"
import { Navigation } from "@/components/ui/navigation"
import clsx from "clsx";
import { motion } from 'framer-motion'
import Link from "next/link";
import { useRouter } from "next/navigation";

type MenuItemLink = {
    name: string;
    type: "link";
    href: string;
    newTab: boolean;
    onActivated: () => void;
};

type MenuItemButton = {
    name: string;
    type: "button";
    onClick: () => void;
    onActivated: () => void;
};

type MenuItem = MenuItemLink | MenuItemButton;

const MotionNavigation = motion(Navigation);
const openLink = (url: string, newTab: boolean = false) => {
    window.open(url, newTab ? '_blank' : "_self")?.focus()
};

function HeaderMenu() {
    const router = useRouter();

    const items: MenuItem[] = [
        {
            name: "Home",
            type: "link",
            href: "/",
            newTab: false,
            onActivated: () => router.push("/"),
        },
        {
            name: "Blog",
            type: "link",
            href: "#",
            newTab: true,
            onActivated: () => {
                if (!process.env.NEXT_PUBLIC_BLOG_URL) return;

                openLink(process.env.NEXT_PUBLIC_BLOG_URL)
            },
        },
        {
            name: "Docs",
            type: "link",
            newTab: true,
            href: process.env.NEXT_PUBLIC_DOCS_URL ?? '#',
            onActivated: () => {
                if (!process.env.NEXT_PUBLIC_DOCS_URL) return;

                openLink(process.env.NEXT_PUBLIC_DOCS_URL)
            },
        },
    ]

    return (
        <motion.div
            className="top-6 left-1/2 -translate-x-1/2 hidden md:block fixed z-50"
            initial={{ opacity: 0, y: '-100%', x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
        >
            <Navigation
                as="nav"
                className="rounded-full border border-white/10 bg-white/5 p-2"
            >
                {({ ready, size, position, duration }) => (
                    <div
                        style={{
                            "--size": size,
                            "--position": position,
                            "--duration": duration,
                        } as React.CSSProperties}>
                        {/* blur highlight */}
                        <div
                            className={clsx(
                                { hidden: !ready },
                                "absolute bottom-0 h-1/2 w-[var(--size)] translate-x-[var(--position)] bg-white/75 blur-xl transition-[width,transform] duration-[--duration]",
                            )}></div>

                        {/* main panel background */}
                        <div className="absolute inset-0 rounded-full bg-neutral-950/70 backdrop-blur-md"></div>

                        <div className="relative">
                            {/* highlight background overlay */}
                            <div
                                className={clsx(
                                    { hidden: !ready },
                                    "absolute inset-y-0 h-full w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white/5 transition-[width,transform] duration-[--duration]",
                                )}></div>
                            <div
                                className={clsx(
                                    { hidden: !ready },
                                    "absolute bottom-0 h-1/3 w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white opacity-20 blur-md transition-[width,transform] duration-[--duration]",
                                )}></div>

                            <Navigation.List as="ul" className="relative flex items-center gap-3">
                                {items.map((item, index) => (
                                    <Navigation.Item
                                        key={index}
                                        as="li"
                                        onActivated={item.onActivated}
                                        active={index === 0 ? true : false}
                                    >
                                        {({ setActive, isActive }) => (
                                            item.type === "link"
                                                ? (
                                                    <Link
                                                        href={item.href}
                                                        className={clsx(
                                                            [isActive ? "text-white/75 text-shadow-sm" : "text-white/60 hover:text-white/75"],
                                                            "inline-block px-4 py-1.5 text-sm transition-[text-shadow,color] duration-300",
                                                        )}
                                                        onClick={(e) => {
                                                            // this will be navigated programmatically, so that we can see the animation finish
                                                            e.preventDefault();
                                                            setActive();
                                                        }}
                                                        target={item.newTab ? "_blank" : "_self"}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )
                                                : (
                                                    <button
                                                        className={clsx(
                                                            [isActive ? "text-white/75 text-shadow-sm" : "text-white/60 hover:text-white/75"],
                                                            "inline-block px-4 py-1.5 text-sm transition-[text-shadow,color] duration-300",
                                                        )}
                                                        onClick={() => {
                                                            item.onClick();
                                                            setActive();
                                                        }}
                                                        type="button"
                                                    >
                                                        {item.name}
                                                    </button>
                                                )
                                        )}
                                    </Navigation.Item>
                                ))}
                            </Navigation.List>
                        </div>
                    </div>
                )}
            </Navigation>
        </motion.div>
    );
}

export default HeaderMenu;