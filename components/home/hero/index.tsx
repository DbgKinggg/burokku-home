import Block3D from "@/components/home/hero/3DBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SpotlightButton from "@/components/ui/spotlight-button";
import { Mail } from "lucide-react";

function HomeHero() {
    return (
        <section className="px-10 mt-24 md:pt-20 flex flex-col items-center gap-y-4 min-h-screen">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-zinc-400 to-zinc-100 text-center">
                The all-in-one Web3 Dashboard
            </h1>
            <p className="text-xl md:text-3xl text-center text-muted-foreground">Reimagine your Web3 experience, <br />just like building blocks</p>
            <div className="flex items-center mt-6">
                <Mail
                    className="relative left-8 transform text-muted-foreground w-5 h-5"
                />
                <Input
                    placeholder="Your email"
                    type="email"
                    className="w-full md:w-80 pl-10"
                />
            </div>
            <SpotlightButton className="mt-3">
                <span className="relative bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200 [font-variation-settings:'wdth'_100] group-hover:font-extrabold group-hover:[font-variation-settings:'wdth'_125]">
                    Join Waitlist
                </span>
            </SpotlightButton>
            <div className="mx-auto md:max-w-5xl">
                <Block3D />
            </div>
        </section>
    );
}

export default HomeHero;