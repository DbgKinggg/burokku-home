import DottedTitle from "../shared/dotted-title";
import SampleWidget from "../widget";
import WidgetsMain from "./widgets-main";
import ClientOnly from "@/components/base/client-only";

function HomeWidgetCloud() {
    return (
        <section className="min-h-screen pt-12">
            <DottedTitle
                title="Modular Widgets"
                description="Personalize your web3 journey with us. Utilize customizable widgets to tailor your dashboard and explore web3 information your way."
            />
            <ClientOnly>
                <WidgetsMain />
            </ClientOnly>
            <div className="text-muted-foreground text-center font-semibold md:hidden">
                And much more...
            </div>
            <div className="hidden md:flex max-w-5xl mx-auto">
                <ClientOnly>
                    <SampleWidget />
                </ClientOnly>
            </div>
        </section >
    );
}

export default HomeWidgetCloud;