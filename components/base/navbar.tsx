"use client"
import { Navigation } from "@/components/ui/navigation"
import clsx from "clsx";

function Navbar() {
    const items = ["Home", "Community", "Docs", "Join Waitlist"]

    //TODO: finish navigate function
    const navigate = () => { };

    return (
        <Navigation as="nav" className="rounded-full border border-white/10 bg-white/5 p-2 top-5 left-1/2 -translate-x-1/2 hidden md:block fixed">
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
                                    onActivated={navigate}
                                    active={index === 0 ? true : false}
                                >
                                    {({ setActive, isActive }) => (
                                        <a
                                            href="#"
                                            className={clsx(
                                                [isActive ? "text-white/75 text-shadow-sm" : "text-white/60 hover:text-white/75"],
                                                "inline-block px-4 py-1.5 text-sm transition-[text-shadow,color] duration-300",
                                            )}
                                            onClick={setActive}>
                                            {item}
                                        </a>
                                    )}
                                </Navigation.Item>
                            ))}
                        </Navigation.List>
                    </div>
                </div>
            )}
        </Navigation>
    );
}

export default Navbar;