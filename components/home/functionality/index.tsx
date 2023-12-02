import DottedTitle from "@/components/home/shared/dotted-title";

const functionalities = [
    {
        title: "Modular Customization",
        description: "Personalize your dashboard experience with our customizable widgets, enabling you to tailor the layout and content according to your needs.",
        icon: ''
    },
    {
        title: "Multi-chain Support",
        description: "With support for more than 15 different chains, our platform ensures wide coverage of the blockchain universe.",
        icon: ''
    },
    {
        title: "Powerful Search Functionality",
        description: "Easily search for a wallet profile, an NFT, a dApp, article, and more with our powerful search functionality.",
        icon: ''
    },
    {
        title: "Command Support",
        description: "Built for the geeks and pros, our platform allows you to use your keyboard to navigate and use the dashboard.",
        icon: ''
    },
    {
        title: "Wallet Activity Tracker",
        description: "Monitor your wallet activities across all chains in real-time with our intuitive tracking widget.",
        icon: ''
    },
    {
        title: "Custom Web3 News Feed",
        description: "Stay informed with a personalized news feed, delivering the latest web3 news, articles, and social media content.",
        icon: ''
    },
    {
        title: "Token Swapping",
        description: "Seamlessly swap tokens with our user-friendly widget, allowing for efficient and secure transactions.",
        icon: ''
    },
    {
        title: "NFT Marketplace",
        description: "Buy and sell NFTs swiftly with our integrated marketplace widget, simplifying your digital asset transactions.",
        icon: ''
    },
    {
        title: "Rich Filter Options",
        description: "Explore your wallet activities in depth with our comprehensive filter options, offering you a detailed view of your transactions.",
        icon: ''
    },
]

function HomeFunctionality() {
    return (
        <div className="min-h-screen flex flex-col mx-auto pb-20 items-center max-w-5xl">
            <DottedTitle
                title="Explore Your Web3 Universe"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    functionalities.map((functionality, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-y-2 p-4"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                {functionality.icon}
                            </div>
                            <h3 className="text-xl font-bold">{functionality.title}</h3>
                            <p className="text-muted-foreground">{functionality.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HomeFunctionality;