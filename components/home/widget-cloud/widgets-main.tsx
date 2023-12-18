"use client"
import { useBreakpoint } from "@/lib/hooks/use-breakpoint";
import WidgetsMobile from "./widgets-mobile";
import WidgetsLargeScreen from "./widgets-large-screen";

function WidgetsMain() {
    const { isBelowSm } = useBreakpoint('sm');

    if (isBelowSm) {
        return (
            <WidgetsMobile />
        );
    }

    return (
        <WidgetsLargeScreen />
    );
}

export default WidgetsMain;