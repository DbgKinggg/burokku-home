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
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useTheme } from 'next-themes';
import { APP_NAME } from '@/lib/constants';

const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
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
    const { resolvedTheme } = useTheme();

    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}
                modalSize='compact'
                theme={resolvedTheme === 'dark' ? midnightTheme() : undefined}
            >
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export {
    WalletProvider
}