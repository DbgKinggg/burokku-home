import {WidgetType} from "./constants";

interface CustomReactGridLayouts extends ReactGridLayout.Layouts {
  xxs: ReactGridLayout.Layout[];
  md: ReactGridLayout.Layout[];
}

type Widget = {
  key: string;
  type: WidgetType;
};

type Layouts = {
  layouts: CustomReactGridLayouts;
  widgets: Widget[];
};

type WidgetDragData = {
  widgetType: WidgetType;
};

type Network =
  | "arbitrum_nova"
  | "arbitrum_one"
  | "arweave"
  | "avalanche"
  | "base"
  | "binance_smart_chain"
  | "crossbell"
  | "ethereum"
  | "farcaster"
  | "gnosis"
  | "optimism"
  | "polygon"
  | "scroll"
  | "snapshot"
  | "zksync_era"
  | "zksync_lite";

export type {CustomReactGridLayouts, Layouts, Widget, WidgetDragData, Network};
