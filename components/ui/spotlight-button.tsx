import { As, ComponentPropsWithAs } from "@/lib/types/component-props";
import { cn } from "@/lib/utils";
import { CircleIcon, MoreHorizontalIcon, RotateCwIcon } from "lucide-react";

type ButtonElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type SpotlightButtonProps = ButtonElementProps & {
    loading?: boolean;
    loadingText?: React.ReactNode | string;
}

export function SpotlightButton<Component extends As>(
    { as, children, className, loadingText, loading = false, ...props }
        : ComponentPropsWithAs<Component, SpotlightButtonProps>
) {
    const Component = as ?? "button";

    return (
        <Component
            className={cn(
                className,
                "group relative inline-flex items-center overflow-hidden rounded-full bg-neutral-800 px-8 py-3 transition disabled:cursor-pointer transition-all",
                loading && 'disabled'
            )}
            disabled={loading}
            {...props}>
            <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                <div className={
                    cn(
                        "absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100",
                        loading && 'opacity-100'
                    )
                }></div>
            </div>

            <div className="absolute inset-0.5 rounded-full bg-neutral-900"></div>

            <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>

            {
                loading ? (
                    loadingText ? loadingText : (<MoreHorizontalIcon className="w-5 h-5 animate-spin" />)
                ) : (children)
            }
        </Component>
    )
}


export default SpotlightButton;