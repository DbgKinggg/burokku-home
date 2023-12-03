import DottedTitle from "@/components/home/shared/dotted-title";
import Sidebar from "./sidebar";

function HomeWidget() {
    return (
        <div className="min-h-screen flex flex-col items-center max-w-5xl mx-auto px-2">
            <DottedTitle
                title="Modular Widgets"
                description="Personalize your web3 journey with us. Utilize customizable widgets to tailor your dashboard and explore web3 information your way."
            />
            <div className="mx-auto my-10 w-full">
                <div className="w-full h-11 rounded-t-lg border bg-neutral-950 flex justify-start items-center space-x-1.5 px-3">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="bg-neutral-900 flex justify-between border border-t-0 w-full rounded-b-lg">
                    <div className="px-4 flex-shrink max-w-xs border-r border">
                        <Sidebar />
                    </div>
                    <div className="flex-grow px-2 py-2">
                        right
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeWidget;