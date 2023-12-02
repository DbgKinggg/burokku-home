import DottedTitle from "@/components/home/shared/dotted-title";

function HomeWidget() {
    return (
        <div className="min-h-screen flex flex-col items-center max-w-5xl mx-auto">
            <DottedTitle
                title="Modular Widgets"
                description="Personalize your web3 journey with us. Utilize customizable widgets to tailor your dashboard and explore web3 information your way."
            />
            <div>
                Make a interactive widgets here
            </div>
        </div>
    );
}

export default HomeWidget;