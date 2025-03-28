import React from "react"
import { HeroBackground } from "./hero-background"
import { Header } from "./header"

export const LayoutWithHeader = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="font-[family-name:var(--font-ibm-plex-mono)]">
      <HeroBackground className="flex flex-col justify-between min-h-screen p-8 pb-20 gap-16 sm:p-10 w-full relative">
        <header className="sticky top-8 sm:top-10 z-50">
          <Header />
        </header>
        <main className="overflow-auto flex-1">{children}</main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-zinc-600">
          © 2025 Kinh Bach. All rights reserved.
        </footer>
      </HeroBackground>
    </div>
  )
}
