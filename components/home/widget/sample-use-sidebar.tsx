function SampleUseSidebar() {
    return (
        <div className="h-full w-full border rounded-3xl flex items-center justify-center px-4"
            onContextMenu={(e) => e.preventDefault()}
        >
            <p className="text-xl text-center">👈🏻 Drag item from the sidebar to here</p>
        </div>
    );
}


export default SampleUseSidebar;