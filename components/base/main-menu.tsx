"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import HeaderMenu from "./header-menu";
import LaunchBtn from "./launch-btn";
import Logo from "./logo";
import { Button } from "../ui/button";
import ConnectWalletButton from "./connect-wallet-button";

function MainMenu() {
    return (
        <nav className={"fixed z-50 top-6 left-0 w-full px-6 justify-between hidden md:flex"}>
            <Logo />
            <HeaderMenu />
            <div className="flex gap-x-2">
                <ConnectWalletButton />
                <LaunchBtn />
            </div>
        </nav>
    );
}

export default MainMenu;