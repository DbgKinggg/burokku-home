import MultiToken from "../widget/multi-token";
import Token from "../widget/token";
import WalletActivity from "../widget/wallet-activity";

function WidgetsMobile() {
    return (
        <div className="flex flex-wrap px-4 gap-y-8 lg:flex-nowrap gap-x-8 justify-center overflow-hidden pt-10 relative z-20">
            <div className="w-full h-[350px] md:w-72 md:h-[400px] lg:w-96 lg:h-[400px] flex-shrink-0">
                <WalletActivity showMoveHandle={false} />
            </div>
            <div className="w-full md:w-64 h-64 flex-shrink-0">
                <Token showMoveHandle={false} />
            </div>
            <div className="w-full h-56 md:w-80 md:h-[300px] flex-shrink-0">
                <MultiToken showMoveHandle={false} />
            </div>
        </div>
    );
}

export default WidgetsMobile;