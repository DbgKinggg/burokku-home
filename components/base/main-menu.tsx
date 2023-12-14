import HeaderMenu from "./header-menu";
import LaunchBtn from "./launch-btn";
import Logo from "./logo";

function MainMenu() {
    return (
        <nav className={"fixed z-50 top-6 left-0 w-full px-6 justify-between hidden md:flex"}>
            <Logo />
            <HeaderMenu />
            <LaunchBtn />
        </nav>
    );
}

export default MainMenu;