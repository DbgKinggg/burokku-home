import DragHandle from "./drag-handle";

function SampleWidget() {
    return (
        <div className="h-full w-full border flex flex-col group rounded-3xl relative items-center justify-center px-4 py-6"
            onContextMenu={(e) => e.preventDefault()}
        >
            <DragHandle />
            <span className="text-3xl md:text-5xl mx-auto">🎉</span>
            <p className="text-2xl font-semibold text-center mt-3">
                {`It's That Easy!`}
            </p>
            <p className="text-center mt-2 text-muted-foreground">
                Try move things around, resize, and more!
            </p>
        </div>
    );
}


export default SampleWidget;