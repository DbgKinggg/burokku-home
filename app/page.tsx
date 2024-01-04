import HomeInformationAggregator from "@/components/home/information-aggregator";
import HomeHero from "@/components/home/hero";
import HomeFunctionality from "@/components/home/functionality";
import HomeFooterCTA from "@/components/home/footer-cta";
import HomeWidgetCloud from "@/components/home/widget-cloud";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeInformationAggregator />
      <HomeWidgetCloud />
      <HomeFunctionality />
      <HomeFooterCTA />
    </>
  )
}