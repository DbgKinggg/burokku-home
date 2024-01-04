import { Loader2 } from "lucide-react";
import { Button, type ButtonProps } from "./button";

interface RichButtonProps extends ButtonProps {
    isLoading: boolean;
    loadingText?: string;
}


function RichButton({ isLoading, loadingText, children, ...props }: RichButtonProps) {
    return (
        <Button
            disabled={isLoading}
            {...props}>
            {
                isLoading
                    ? (
                        loadingText
                            ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    {loadingText}
                                </>
                            )
                            : <Loader2 className="h-4 w-4 animate-spin" />
                    )
                    : children
            }
        </Button>
    );
}

export default RichButton;