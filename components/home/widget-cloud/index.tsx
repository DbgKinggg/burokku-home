"use client"
import DottedTitle from "../shared/dotted-title";
import Token from "../widget/token";
import TokenSwap from "../widget/token-swap";
import WalletActivity from "../widget/wallet-activity";
import WalletNFTs from "../widget/wallet-nft";

function HomeWidgetCloud() {
    return (
        <div className="min-h-screen pt-12">
            <DottedTitle
                title="Modular Widgets"
                description="Personalize your web3 journey with us. Utilize customizable widgets to tailor your dashboard and explore web3 information your way."
            />
            <div className="flex gap-x-8 overflow-x-hidden pt-32">
                <div className="w-80 h-[400px] flex-shrink-0 -translate-x-14 -translate-y-20">
                    <WalletActivity showMoveHandle={false} />
                </div>
                <div className="w-64 h-64 flex-shrink-0 -translate-x-14">
                    <Token showMoveHandle={false} />
                </div>
                <div className="w-96 h-[500px] flex-shrink-0 -translate-x-14 -translate-y-10">
                    <TokenSwap showMoveHandle={false} />
                </div>
                <div className="w-[500px] flex-shrink-0 -translate-x-14 -translate-y-32">
                    <WalletNFTs showMoveHandle={false} />
                </div>
            </div>
        </div>
    );
}

export default HomeWidgetCloud;