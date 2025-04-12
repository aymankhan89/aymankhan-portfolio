import React from "react"
import { Header } from "./header"
import { HeroBackground } from "./hero-background"

export const LayoutWithHeader = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="font-[family-name:var(--font-preahvihear)] w-screen">
      <HeroBackground>
        <header className="sticky top-8 sm:top-10 z-50">
          <Header />
        </header>
        <main className="overflow-auto container mx-auto flex-1 p-4">
          {children}
        </main>
        <footer className="text-sm md:text-lg row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-zinc-600 p-4">
          © 2025 Kinh Bach. All rights reserved.
        </footer>
      </HeroBackground>
    </div>
  )
}
