import DottedTitle from "../shared/dotted-title";
import SampleWidget from "../widget";
import WidgetsMain from "./widgets-main";

function HomeWidgetCloud() {
    return (
        <div className="min-h-screen pt-12">
            <DottedTitle
                title="Modular Widgets"
                description="Personalize your web3 journey with us. Utilize customizable widgets to tailor your dashboard and explore web3 information your way."
            />
            <WidgetsMain />
            <div className="text-muted-foreground text-center font-semibold md:hidden">
                And much more...
            </div>
            <div className="max-w-5xl mx-auto">
                <SampleWidget />
            </div>
        </div>
    );
}

export default HomeWidgetCloud;