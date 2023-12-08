import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import DragHandle from "./drag-handle";

type NFT = {
    name: string,
    rank: number,
    rankPercentage: number,
    collection: string,
    floor: string,
    bestOffer: string,
    image: string
};

const sampleNfts: NFT[] = [
    {
        name: 'YuGiYn#423',
        rank: 48,
        rankPercentage: 0.54,
        collection: 'YuGiYn',
        floor: '6.9',
        bestOffer: '6.9 WETH',
        image: "/images/nfts/sample-nft-01.avif"
    },
    {
        name: 'Murakami Lucky Coin #1433',
        rank: 2000,
        rankPercentage: 20,
        collection: 'Murakami.Flowers Coin',
        floor: '0.1',
        bestOffer: '0.069 WETH',
        image: "/images/nfts/sample-nft-02.png"
    },
];

function WalletNFTs() {
    return (
        <div className="h-full w-full relative group border rounded-3xl flex px-3 py-3 md:px-6 md:py-6 flex-col gap-y-2 overflow-hidden">
            <DragHandle />
            <div className="text-lg md:text-2xl font-bold">
                Your NFTs
            </div>
            <div className="flex gap-x-4 gap-y-3 mt-4 overflow-x-auto">
                {
                    sampleNfts.map((nft, index) => (
                        <NFTCard nft={nft} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

type NFTCardProps = {
    nft: NFT;
};
function NFTCard({ nft }: NFTCardProps) {
    return (
        <Card className="w-[400px] min-w-[250px]">
            <CardHeader>
                <Image
                    alt="NFT"
                    className="w-full rounded-2xl"
                    height="100"
                    src={nft.image}
                    style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                    }}
                    width="100"
                />
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-y-1 items-start justify-between py-2">
                    <Badge className="flex items-center" variant="secondary">
                        <HeartIcon className="text-pink-500 mr-1" />
                        Rank: {nft.rank} ({nft.rankPercentage}%)
                    </Badge>
                    <div className="text-sm bg-[#333333] px-2 py-1 rounded-xl">Floor ≡ {nft.floor}</div>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-bold">{nft.name}</h3>
                    <div className="flex items-center space-x-1">
                        <span>{nft.collection}</span>
                    </div>
                </div>
                <div className="py-2">
                    <span className="text-muted-foreground">Best offer: {nft.bestOffer}</span>
                </div>
            </CardContent>
        </Card>
    );
}

export default WalletNFTs;