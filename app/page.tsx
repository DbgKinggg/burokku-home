import Logo from "@/components/base/logo";
import Navbar from "@/components/base/navbar";
import HomeInformationAggregator from "@/components/home/information-aggregator";
import HomeHero from "@/components/home/hero";
import HomeWidget from "@/components/home/widget";
import HomeFunctionality from "@/components/home/functionality";
import HomeFooterCTA from "@/components/home/footer-cta";
import HomeFooter from "@/components/home/footer";
import HomeWidgetCloud from "@/components/home/widget-cloud";

export default function Home() {
  return (
    <main className="">
      <Logo />
      <Navbar />
      <HomeHero />
      <HomeInformationAggregator />
      <HomeWidgetCloud />
      <HomeWidget />
      <HomeFunctionality />
      <HomeFooterCTA />
      <HomeFooter />
    </main>
  )
}