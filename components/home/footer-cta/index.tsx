import JoinWaitlist from "../shared/join-waitlist";

function HomeFooterCTA() {
    return (
        <div className="py-20 max-w-5xl mx-auto" id="footer-cta">
            <div className="text-center px-4">
                <p className="text-5xl md:text-8xl bg-gradient-to-b from-white/50 to-white bg-clip-text text-transparent">
                    {`Can't wait to try it out?`}
                </p>
                <p className="text-4xl md:text-6xl mt-2">
                    {`Join waitlist and we will notify you when we launch!`}
                </p>
            </div>
            <div className="mt-12">
                <JoinWaitlist />
            </div>
        </div>
    );
}

export default HomeFooterCTA;