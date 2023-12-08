import {Network} from "./type";

enum WidgetType {
  SAMPLE_USE_SIDE_BAR = "SAMPLE_USE_SIDE_BAR",
  TOKEN = "TOKEN",
  WALLET_ACTIVITY = "WALLET_ACTIVITY",
}

const networkImages: {[key in Network]?: string} = {
  arbitrum_nova: "/images/networks/arbitrum.png",
  arbitrum_one: "/images/networks/arbitrum.png",
  arweave: "/images/networks/arweave.png",
  avalanche: "/images/networks/avalanche.png",
  base: "/images/networks/base.png",
  binance_smart_chain: "/images/networks/bsc.png",
  crossbell: "/images/networks/crossbell.png",
  ethereum: "/images/networks/ethereum.png",
  farcaster: "/images/networks/farcaster.png",
  gnosis: "/images/networks/gnosis.png",
  optimism: "/images/networks/optimism.png",
  polygon: "/images/networks/polygon.png",
  scroll: "/images/networks/scroll.png",
  snapshot: "/images/networks/snapshot.png",
  zksync_era: "/images/networks/zksync.png",
  zksync_lite: "/images/networks/zksync.png",
};

export {WidgetType, networkImages};
