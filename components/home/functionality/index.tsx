import DottedTitle from "@/components/home/shared/dotted-title";

const functionalities = [
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
    {
        title: "Modular Customization",
        description: "Personalize your dashboard experience with our customizable widgets, enabling you to tailor the layout and content according to your needs.",
        icon: ''
    }
]

function HomeFunctionality() {
    return (
        <div className="min-h-screen flex flex-col mx-auto items-center max-w-5xl">
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