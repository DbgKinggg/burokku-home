"use client"
import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
    midnightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    linea,
    avalanche,
    opBNB,
    scroll
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { APP_NAME } from '@/lib/constants';

const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora, linea, avalanche, opBNB, scroll],
    [
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: APP_NAME,
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})

interface WalletProviderProps {
    children: React.ReactNode;
}

function WalletProvider({ children }: WalletProviderProps) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}
                modalSize='compact'
                theme={midnightTheme()}
            >
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export {
    WalletProvider
}