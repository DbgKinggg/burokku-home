"use client"
import HeaderMenu from "./header-menu";
import LaunchBtn from "./launch-btn";
import Logo from "./logo";
import ConnectWalletButton from "./connect-wallet-button";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";

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
                <Link
                    href={`https://twitter.com/burokku_one`}
                    target="_blank"
                    aria-label={`X formerly known as Twitter`}
                    className={buttonVariants({
                        variant: 'outline',
                        size: 'icon'
                    })}
                >
                    <Image
                        src={`/images/social-media/twitter-x.svg`}
                        alt={`X formerly known as Twitter`}
                        width={12}
                        height={12}
                    />
                </Link>
                <ConnectWalletButton />
                <LaunchBtn />
            </div>
        </nav>
    );
}

export default MainMenu;