function SampleUseSidebar() {
    return (
        <div className="h-full w-full border flex flex-col rounded-3xl flex items-center justify-center px-4"
            onContextMenu={(e) => e.preventDefault()}
        >
            <span className="text-3xl md:text-5xl mr-auto">👈🏻</span>
            <p className="text-xl text-center mt-3">Drag item from the sidebar to the right</p>
        </div>
    );
}


export default SampleUseSidebar;