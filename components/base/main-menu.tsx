"use client"
import HeaderMenu from "./header-menu";
import LaunchBtn from "./launch-btn";
import Logo from "./logo";
import ConnectWalletButton from "./connect-wallet-button";
import Link from "next/link";

function MainMenu() {
    return (
        <nav className={"fixed z-50 top-6 left-0 w-full px-6 justify-between hidden md:flex"}>
            <Link
                href="/"
            >
                <Logo />
            </Link>
            <HeaderMenu />
            <div className="flex gap-x-2">
                <ConnectWalletButton />
                <LaunchBtn />
            </div>
        </nav>
    );
}

export default MainMenu;