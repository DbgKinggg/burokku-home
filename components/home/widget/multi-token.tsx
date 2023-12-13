import Image from "next/image";
import DragHandle from "./drag-handle";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import colors from "tailwindcss/colors";

type Token = {
    name: string;
    icon: string;
    price: number;
    priceFormatted: string;
    change24h: number;
    priceChart: {
        value: number;
    }[]
}

const tokens: Token[] = [
    {
        name: 'BTC',
        price: 41323,
        priceFormatted: '$41,323',
        change24h: -0.5,
        icon: '/images/tokens/btc.png',
        priceChart: [
            {
                value: 4000,
            },
            {
                value: 3000,
            },
            {
                value: 2000,
            },
            {
                value: 2780,
            },
            {
                value: 1890,
            },
            {
                value: 2390,
            },
            {
                value: 3490,
            },
        ]
    },
    {
        name: 'ETH',
        price: 2172,
        priceFormatted: '$2172',
        change24h: 1.2,
        icon: '/images/tokens/eth.png',
        priceChart: [
            {
                value: 3200,
            },
            {
                value: 4000,
            },
            {
                value: 3000,
            },
            {
                value: 3580,
            },
            {
                value: 4090,
            },
            {
                value: 4590,
            },
            {
                value: 4990,
            },
        ]
    },
    {
        name: 'USDT',
        price: 1.01,
        priceFormatted: '$1.01',
        change24h: 0.2,
        icon: '/images/tokens/usdt.png',
        priceChart: [
            {
                value: 1000,
            },
            {
                value: 2000,
            },
            {
                value: 3000,
            },
            {
                value: 2500,
            },
            {
                value: 2600,
            },
            {
                value: 2390,
            },
            {
                value: 2890,
            },
        ]
    }
];

type MultiTokenProps = {
    showMoveHandle?: boolean;
}

function MultiToken({ showMoveHandle = true }: MultiTokenProps) {
    return (
        <div className="h-full w-full border rounded-3xl relative group flex px-3 py-3 md:px-6 md:py-6 flex-col gap-y-2 overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
        >
            {
                showMoveHandle && (
                    <DragHandle />
                )
            }
            <div className="flex flex-col gap-y-1">
                {
                    tokens.map((token, index) => (
                        <TokenRow
                            key={index}
                            token={token}
                        />
                    ))
                }
            </div>
        </div>
    );
}

type TokenRowProps = {
    token: Token
};

function TokenRow({ token }: TokenRowProps) {
    const chartColorStart = token.change24h > 0 ? colors.green[500] : colors.red[500];
    const chartColorEnd = token.change24h > 0 ? colors.green[800] : colors.red[800];
    const id = token.name.toLowerCase() + '-chart';

    return (
        <div className="flex flex-row items-center gap-x-3 py-3">
            <div className="relative w-6 h-6 flex-shrink-0">
                <Image
                    src={token.icon}
                    alt={token.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="aspect-square w-full h-full"
                />
            </div>
            <div className="text-lg md:text-xl font-medium">{token.name}</div>
            <div className="flex-grow h-10">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={200}
                        height={30}
                        data={token.priceChart}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <defs>
                            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={chartColorStart} stopOpacity={0.8} />
                                <stop offset="95%" stopColor={chartColorEnd} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke={chartColorStart} fillOpacity={1} fill={`url(#${id})`} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div>
                <div className="md:text-lg font-semibold">{token.priceFormatted}</div>
                <div className="text-sm md:text-base"
                    style={{
                        color: chartColorStart
                    }}
                >{token.change24h}%</div>
            </div>
        </div>
    );
}

export default MultiToken;