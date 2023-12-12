"use client"
import { KeyRoundIcon, NewspaperIcon, SearchIcon, SmileIcon, WalletCardsIcon } from "lucide-react";
import { useRef, MouseEvent } from "react";
import Image from "next/image";

function SearchCommand() {
    let bounds
    const inputRef = useRef<HTMLDivElement>(null)
    const glowRef = useRef<HTMLDivElement>(null)
    const rotateToMouse = (e: MouseEvent<HTMLDivElement>) => {
        if (inputRef.current === null || glowRef.current === null) {
            return
        }

        bounds = inputRef.current.getBoundingClientRect()
        const mouseX = e.clientX
        const mouseY = e.clientY
        const leftX = mouseX - bounds.x
        const topY = mouseY - bounds.y
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2,
        }
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

        inputRef.current.style.transform = `
        scale3d(1.03, 1.03, 1.03)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `

        glowRef.current.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `
    }
    const removeListener = (e: MouseEvent<HTMLDivElement>) => {
        if (inputRef.current === null) {
            return
        }

        inputRef.current.style.transform = ''
        inputRef.current.style.background = ''
    }

    return (
        <div
            ref={inputRef}
            className="card group rounded-3xl"
            onMouseLeave={removeListener}
            onMouseMove={rotateToMouse}
        >
            <SearchCommandPanel />
            <div ref={glowRef} className="glow rounded-3xl" />
        </div>
    );
}

function SearchCommandPanel() {
    return (
        <div className="w-full max-w-xl h-72 rounded-2xl border px-1 py-1 transition-all">
            <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
                <SearchIcon className="w-6 h-6" />
                <input className="flex ml-2 h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" placeholder="Type a command or search..." autoComplete="off" autoCorrect="off" spellCheck="false" type="text" />
            </div>
            <div className="px-2 py-2 mt-2">
                <div className="text-muted-foreground text-sm ml-2">Suggestions</div>
                <div className="flex flex-col gap-y-1">
                    <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" aria-selected="false" data-selected="false">
                        <WalletCardsIcon className="w-4 h-4 mr-2" />
                        <span>Wallet</span>
                    </div>
                    <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" aria-selected="false" data-selected="false">
                        <SmileIcon className="mr-2 h-4 w-4" />
                        <span>NFT</span>
                    </div>
                    <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" aria-selected="false" data-selected="false">
                        <KeyRoundIcon className="mr-2 h-4 w-4" />
                        <span>dApp</span>
                    </div>
                    <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" aria-selected="false" data-selected="false">
                        <NewspaperIcon className="mr-2 h-4 w-4" />
                        <span>News/Article</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchCommand;