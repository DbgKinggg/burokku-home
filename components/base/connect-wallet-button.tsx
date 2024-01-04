"use client"
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

type ConnectWalletButtonProps = {
    connectWalletOnClick?: () => void;
}

function ConnectWalletButton({ connectWalletOnClick }: ConnectWalletButtonProps) {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                // openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button
                                        onClick={() => {
                                            if (connectWalletOnClick) {
                                                connectWalletOnClick();
                                            }

                                            openConnectModal();
                                        }}
                                        type="button"
                                        variant={`outline`}
                                        className="w-full"
                                    >
                                        Connect Wallet
                                    </Button>
                                );
                            }

                            // Don't care about the chain for now
                            // if (chain.unsupported) {
                            //     return (
                            //         <Button onClick={openChainModal} type="button">
                            //             Wrong network
                            //         </Button>
                            //     );
                            // }

                            // we may want to change this into a dropdown/drawer later
                            return (
                                <Button
                                    variant={`outline`}
                                    onClick={openAccountModal}
                                    type="button"
                                    className="font-bold w-full"
                                >
                                    {
                                        account.ensAvatar && (
                                            <div className="w-6 h-6 rounded-full overflow-hidden relative mr-2">
                                                <Image
                                                    src={account.ensAvatar}
                                                    alt={account.displayName}
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"
                                                    className="aspect-square w-full h-full"
                                                />
                                            </div>
                                        )
                                    }
                                    {account.displayName}
                                </Button>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
}

export default ConnectWalletButton;