import Link from "next/link";
import HeaderMenu from "./header-menu";
import LaunchBtn from "./launch-btn";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import MainMenu from "./main-menu";

function Navbar() {
    return (
        <>
            <MainMenu />
            <MobileMenu />
        </>
    );
}

export default Navbar;