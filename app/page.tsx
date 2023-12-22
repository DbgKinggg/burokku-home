import Logo from "@/components/base/logo";
import HeaderMenu from "@/components/base/header-menu";
import HomeInformationAggregator from "@/components/home/information-aggregator";
import HomeHero from "@/components/home/hero";
import HomeFunctionality from "@/components/home/functionality";
import HomeFooterCTA from "@/components/home/footer-cta";
import HomeFooter from "@/components/home/footer";
import HomeWidgetCloud from "@/components/home/widget-cloud";
import { useRef } from "react";
import Navbar from "@/components/base/navbar";

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