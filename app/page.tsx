"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/ui/navigation"
import clsx from "clsx";
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main>
      <Logo />
      <NavigationMenu />
      <HomeMain />
    </main>
  )
}

function Logo() {
  return (
    <div className="fixed top-8 left-5 font-bold text-xl">
      Kazu
    </div>
  )
}

function HomeMain() {
  return (
    <section className="px-10 pt-52 flex flex-col items-center gap-y-4">
      <h1 className="text-6xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-zinc-400 to-zinc-100 text-center">
        The all-in-one Web3 Dashboard
      </h1>
      <p className="text-3xl text-center">Reimagine your Web3 experience, <br />just like building blocks</p>
      <div className="flex gap-x-2 mt-6">
        <Input placeholder="Email" type="email" />
        <Button>
          Join Waitlist
        </Button>
      </div>
      <div className="mx-auto md:max-w-5xl">
        <Spline scene="https://prod.spline.design/rYDE-3z85e5eQn-f/scene.splinecode" />
      </div>
    </section>
  );
}

function NavigationMenu() {
  const items = ["Home", "Community", "Docs", "Join Waitlist"]

  const navigate = () => { };

  return (
    <Navigation as="nav" className="rounded-full border border-white/10 bg-white/5 p-2 fixed top-5 left-1/2 -translate-x-1/2">
      {({ ready, size, position, duration }) => (
        <div
          style={{
            "--size": size,
            "--position": position,
            "--duration": duration,
          } as React.CSSProperties}>
          {/* blur highlight */}
          <div
            className={clsx(
              { hidden: !ready },
              "absolute bottom-0 h-1/2 w-[var(--size)] translate-x-[var(--position)] bg-white/75 blur-xl transition-[width,transform] duration-[--duration]",
            )}></div>

          {/* main panel background */}
          <div className="absolute inset-0 rounded-full bg-neutral-950/70 backdrop-blur-md"></div>

          <div className="relative">
            {/* highlight background overlay */}
            <div
              className={clsx(
                { hidden: !ready },
                "absolute inset-y-0 h-full w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white/5 transition-[width,transform] duration-[--duration]",
              )}></div>
            <div
              className={clsx(
                { hidden: !ready },
                "absolute bottom-0 h-1/3 w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white opacity-20 blur-md transition-[width,transform] duration-[--duration]",
              )}></div>

            <Navigation.List as="ul" className="relative flex items-center gap-3">
              {items.map((item, index) => (
                <Navigation.Item key={index} as="li" onActivated={navigate}>
                  {({ setActive, isActive }) => (
                    <a
                      href="#"
                      className={clsx(
                        [isActive ? "text-white/75 text-shadow-sm" : "text-white/60 hover:text-white/75"],
                        "inline-block px-4 py-1.5 text-sm transition-[text-shadow,color] duration-300",
                      )}
                      onClick={setActive}>
                      {item}
                    </a>
                  )}
                </Navigation.Item>
              ))}
            </Navigation.List>
          </div>
        </div>
      )}
    </Navigation>
  );
}