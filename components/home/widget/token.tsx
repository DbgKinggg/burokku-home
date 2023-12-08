import { cn } from "@/lib/utils";
import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import colors from 'tailwindcss/colors'
import DragHandle from "./drag-handle";

//TODO: change this value to real data 
const data = [
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
];

const token = {
    name: 'BTC',
    price: 60000,
    priceFormatted: '$60,000',
    change24h: -0.5,
    icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
};

function Token() {
    const chartColorStart = token.change24h > 0 ? colors.green[500] : colors.red[500];
    const chartColorEnd = token.change24h > 0 ? colors.green[800] : colors.red[800];

    return (
        <div className="h-full w-full border rounded-3xl relative group flex px-3 py-3 md:px-6 md:py-6 flex-col gap-y-2 overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
        >
            <DragHandle />
            <div className="w-full flex flex-row justify-between">
                <div className="text-3xl md:text-5xl font-bold">{token.name}</div>
                <img
                    src={token.icon}
                    alt={token.name}
                    className="w-7 h-7 md:w-10 md:h-10"
                />
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={200}
                    height={10}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={chartColorStart} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={chartColorEnd} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke={chartColorStart} fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
            <div className="text-2xl md:text-5xl mt-auto">
                {token.priceFormatted}
            </div>
            <div className={cn(
                'text-lg md:text-2xl',
                token.change24h > 0 ? 'text-green-500' : 'text-red-500',
            )}>
                {token.change24h}%
            </div>
        </div>
    );
}

export default Token;