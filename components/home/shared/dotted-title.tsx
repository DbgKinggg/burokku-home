import DotPattern from "../../ui/dot-pattern";

type DottedTitleProps = {
    title: string;
    description?: string;
}

function DottedTitle({
    title,
    description
}: DottedTitleProps) {
    return (
        <div className="relative flex flex-col h-80 w-full items-center justify-center overflow-hidden">
            <DotPattern
                size={32}
                radius={1.5}
                offset-x={0}
                offset-y={0}
                className="absolute inset-0 h-full w-full fill-white/10 [mask-image:radial-gradient(white,transparent_85%)]"
            />

            <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/25 blur-2xl"></div>

                <h2 className="relative text-center px-2 text-3xl md:text-4xl font-bold bg-gradient-to-b from-white/50 to-white bg-clip-text text-transparent">
                    {title}
                </h2>
            </div>
            {
                description && (
                    <p className="mt-4 max-w-xl text-center px-3 text-lg text-muted-foreground">
                        {description}
                    </p>
                )
            }
        </div>
    );
}

export default DottedTitle;