"use client"

import useSize from "@/lib/hooks/use-size";
import { useRef, useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

interface CustomReactGridLayouts extends ReactGridLayout.Layouts {
    xxs: ReactGridLayout.Layout[];
    md: ReactGridLayout.Layout[];
    lg: ReactGridLayout.Layout[];
}

type Widget = {
    key: string;
}

function GridLayout() {
    const { rect, ref } = useSize();

    return (
        <div
            className="flex h-full w-full"
            ref={ref}
        >
            <CustomGridLayoutContent rect={rect} />
        </div>
    );
}

function CustomGridLayoutContent({ rect }: { rect: DOMRect | null }) {
    const width = rect ? rect.width : 1000;
    const gridLayoutRef = useRef<ResponsiveGridLayout>(null);
    const [layouts, setLayouts] = useState<CustomReactGridLayouts>({
        lg: [
            { i: "1", x: 0, y: 0, w: 1, h: 19, minH: 5 },
            { i: "2", x: 1, y: 1, w: 1, h: 19, minH: 5 },
            { i: "3", x: 2, y: 2, w: 1, h: 19, minH: 5 },
        ],
        md: [
            { i: "1", x: 0, y: 0, w: 1, h: 19, minH: 5 },
            { i: "2", x: 1, y: 1, w: 1, h: 19, minH: 5 },
            { i: "3", x: 2, y: 2, w: 1, h: 19, minH: 5 },
        ],
        xxs: [
            { i: "1", x: 0, y: 0, w: 1, h: 5, minH: 5 },
            { i: "2", x: 1, y: 1, w: 1, h: 5, minH: 5 },
            { i: "3", x: 2, y: 2, w: 1, h: 5, minH: 5 },
        ],
    });
    const [widgets, setWidgets] = useState<Widget[]>([
        {
            key: '1',
        },
        {
            key: '2',
        }
    ]);

    const onLayoutChange = (
        _currentLayout: ReactGridLayout.Layout[],
        allLayouts: CustomReactGridLayouts
    ) => {
        // existing bug from react-grid-layout, this is conflicting with the onDrop event
        setTimeout(() => {
            setLayouts(allLayouts);
        }, 100);
    };

    const onDrop = (
        layout: ReactGridLayout.Layout[],
        _layoutItem: ReactGridLayout.Layout,
        event: DragEvent
    ) => {
        if (event.dataTransfer === undefined || event.dataTransfer === null) {
            return;
        }

        const dragDataRaw = event.dataTransfer.getData('dragData');
        if (dragDataRaw === "") {
            return;
        }

        // const dragData = JSON.parse(dragDataRaw) as WidgetDragData;
        // const newKey = generateHash(dragData.widgetType);
        const lastLayoutItem = layout.pop();
        const newLayout: ReactGridLayout.Layout[] = [
            ...layout,
        ];

        // // replace the new item's "i" key with the new key
        // if (lastLayoutItem) {
        //     newLayout.push({
        //         ...lastLayoutItem,
        //         i: newKey,
        //     });
        // }

        // addWidget(
        //     dragData.widgetType,
        //     newKey
        // )

        // get current breakpoint and update the layout
        //eslint-disable-next-line
        const currentBreakpoint = (gridLayoutRef.current?.state as any)?.breakpoint;
        if (currentBreakpoint) {
            setLayouts({
                ...layouts,
                [currentBreakpoint]: newLayout
            });
        } else {
            setLayouts({
                xxs: newLayout,
                md: newLayout,
                lg: newLayout
            });
        }
    }

    const getDroppingItem = () => {
        return { i: 'new', w: 2, h: 5 };
    }

    return (
        <ResponsiveGridLayout
            ref={gridLayoutRef}
            className="layout"
            layouts={layouts}
            breakpoints={{ lg: 996, md: 800, xxs: 0 }}
            cols={{ lg: 3, md: 2, xxs: 1 }}
            rowHeight={30}
            width={width}
        // onLayoutChange={onLayoutChange}
        // onDrop={onDrop}
        // Uncomment this when you want different placeholder for different event
        // onDropDragOver={(event: DragOverEvent) => {
        //     console.log(event);
        //     return false;
        // }}
        // isDroppable={true}
        // droppingItem={getDroppingItem()}
        // Too much unexpected behavior with this option enabled
        // compactType="horizontal"
        >
            {
                widgets.map((widget) => (
                    <div key={widget.key} className="h-full w-full border rounded-3xl">
                        {widget.key}
                    </div>
                ))
            }
        </ResponsiveGridLayout>
    );
}

export default GridLayout;