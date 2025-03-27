import { FullScreen } from "@/components/full-screen"
import { Header } from "@/components/layout/header"
import { HeroBackground } from "@/components/layout/hero-background"
import { MyInformation } from "@/containers/my-information"
import { MyUniverse } from "@/containers/my-universe"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-ibm-plex-mono)]">
      <HeroBackground className="flex flex-col justify-between min-h-screen p-8 pb-20 gap-16 sm:p-10 w-full relative">
        <header className="sticky top-8 sm:top-10 z-50">
          <Header />
        </header>
        <main className="overflow-auto relative flex-1">
          <FullScreen className="w-full xl:w-[85%] mx-auto">
            <MyUniverse />
          </FullScreen>

          <FullScreen className="w-full xl:w-[85%] mx-auto">
            <MyInformation />
          </FullScreen>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-zinc-600">
          © 2025 Kinh Bach. All rights reserved.
        </footer>
      </HeroBackground>
    </div>
  )
}
