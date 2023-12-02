import Logo from "@/components/base/logo";
import Navbar from "@/components/base/navbar";
import HomeFunctionality from "@/components/home/functionality";
import HomeHero from "@/components/home/hero";

export default function Home() {
  return (
    <main>
      <Logo />
      <Navbar />
      <HomeHero />
      <HomeFunctionality />
    </main>
  )
}