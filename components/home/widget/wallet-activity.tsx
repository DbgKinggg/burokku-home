import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { networkImages } from "./constants";
import { cn, truncateMiddle } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Network } from "./type";
import DragHandle from "./drag-handle";

type Activity = {
    network: Network;
    dateFormatted: string;
    parts: string[];
    link: string;
};

const activities: Activity[] = [
    {
        network: "ethereum",
        dateFormatted: "1 hour ago",
        parts: [
            "@@address:0x0000000000000000000000000000000000000000",
            " ",
            "bought",
            " ",
            "Azuki #8888",
            ' from ',
            '"@@address:0x0000000000000000000000000000000000000000"',
            ' on OpenSea'
        ],
        link: "Opensea"
    },
    {
        network: 'base',
        dateFormatted: '2 days ago',
        parts: [
            "@@address:0x0000000000000000000000000000000000000000",
            " ",
            "sent",
            " ",
            " ",
            "@@number:10.00",
            " ",
            "@@symbol:USDT",
            " ",
            "to",
            " ",
            "@@address:0x0000000000000000000000000000000000000000",
            " ",
            ""
        ],
        link: "Etherscan"
    }
];

function WalletActivity() {
    return (
        <div className="h-full w-full relative group border rounded-3xl flex px-3 py-3 md:px-6 md:py-6 flex-col gap-y-2 overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
        >
            <DragHandle />
            <h3 className="text-xl md:text-2xl font-bold">
                {`Wallet Activities`}
            </h3>
            <div className="overflow-y-auto">
                {
                    activities.map((activity, index) => (
                        <WalletActivityRow
                            key={index}
                            activity={activity}
                        />
                    ))
                }
            </div>
        </div>
    );
}

type WalletActivityRowProps = {
    activity: Activity;
}

function WalletActivityRow({ activity }: WalletActivityRowProps) {
    return (
        <div className="p-4 flex flex-col gap-y-2 hover:bg-secondary rounded-2xl"
        >
            <div className="flex text-sm gap-x-2 text-muted-foreground">
                <div className="capitalize flex gap-x-2">
                    <NetworkIcon network={activity.network} />
                    <span>{activity.network}</span>
                </div>
                <span className="">
                    {activity.dateFormatted}
                </span>
            </div>
            <div className="flex gap-x-2">
                <a
                    href=""
                    className="text-blue-500"
                    onClick={event => event.preventDefault()}
                    onMouseDown={event => event.stopPropagation()}
                    onTouchStart={event => event.stopPropagation()}
                >
                    <Badge
                        variant={`secondary`}
                    >
                        <span>{activity.link}</span>
                        <ExternalLink className="h-3 w-3 ml-2" />
                    </Badge>
                </a>
            </div>
            <div className="break-all">
                {
                    activity.parts.map((part, index) => (
                        <WalletActivityPart
                            key={index}
                            part={part}
                        />
                    ))
                }
            </div>
        </div>
    );
}

interface NetworkIconProps {
    network: string;
};

function NetworkIcon({ network }: NetworkIconProps) {
    if (!(network in networkImages)) {
        return null;
    }

    const imageSrc = networkImages[network as keyof typeof networkImages];

    if (imageSrc === undefined) {
        return null;
    }

    return (
        <div className="w-5 h-5 rounded-full overflow-hidden relative">
            <Image
                src={imageSrc}
                alt={network}
                width="0"
                height="0"
                sizes="100vw"
                className="aspect-square w-full h-full"
            />
        </div>
    );
}

interface WalletActivityPartProps {
    part: string;
}

/**
 * There should be only one match for each part
 */
function WalletActivityPart({ part }: WalletActivityPartProps) {
    if (part === "") {
        return null;
    }

    const addressIndex = part.indexOf("@@address:");

    if (addressIndex !== -1) {
        const address = part.slice(addressIndex + 10);

        return (
            <TooltipProvider delayDuration={200}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a
                            href=""
                            className={"text-blue-500"}
                            onClick={event => event.preventDefault()}
                            onMouseDown={event => event.stopPropagation()}
                            onTouchStart={event => event.stopPropagation()}
                        >
                            {truncateMiddle(address, 4, 4)}
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{address}</p>
                        <p className="text-center text-sm text-muted-foreground">Click to copy</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        )
    }

    const platformIndex = part.indexOf("@@platform:");
    if (platformIndex !== -1) {
        const platform = part.slice(platformIndex + 11);

        return (
            <b>
                {platform}
            </b>
        )
    }

    const numberIndex = part.indexOf("@@number:");
    if (numberIndex !== -1) {
        const number = part.slice(numberIndex + 9);

        return (
            <span className="text-blue-500">
                {number}
            </span>
        )
    }

    const symbolIndex = part.indexOf("@@symbol:");
    if (symbolIndex !== -1) {
        const symbol = part.slice(symbolIndex + 9);

        return (
            <span className="text-blue-500">
                {symbol}
            </span>
        )
    }

    // replace the ; with a line break
    if (part === '; ') {
        return (<br />)
    }

    return part;
}

export default WalletActivity;