import {WidgetType} from "./constants";

interface CustomReactGridLayouts extends ReactGridLayout.Layouts {
  xxs: ReactGridLayout.Layout[];
  md: ReactGridLayout.Layout[];
  lg: ReactGridLayout.Layout[];
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

export type {CustomReactGridLayouts, Layouts, Widget, WidgetDragData};
