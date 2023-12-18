import Block3D from "@/components/home/hero/3DBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SpotlightButton from "@/components/ui/spotlight-button";
import { Mail } from "lucide-react";
import JoinWaitlist from "../shared/join-waitlist";
import ClientOnly from "@/components/base/client-only";

function HomeHero() {
    return (
        <section className="px-5 md:px-10 mt-24 md:pt-20 flex flex-col items-center gap-y-4 min-h-screen max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-zinc-400 to-zinc-100 text-center">
                The all-in-one<br />Web3 Dashboard
            </h1>
            <p className="text-xl md:text-3xl text-center text-muted-foreground mt-4">
                Reimaginate your Web3 experience, <br />just like building blocks
            </p>
            <JoinWaitlist />
            <div className="mx-auto md:max-w-5xl mt-5 relative">
                <ClientOnly>
                    <Block3D />
                </ClientOnly>
            </div>
        </section>
    );
}

export default HomeHero;