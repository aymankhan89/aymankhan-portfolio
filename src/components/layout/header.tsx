"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ModeToggle } from "../mode-toggle"
import { Logo } from "../svg/logo"
import { usePathname } from "next/navigation"

const links = [
  {
    title: "All",
    href: "/",
  },

  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (currentScrollY === 0) {
      setIsScrolled(false)
    } else if (currentScrollY > 0) {
      setIsScrolled(true)
    }

    lastScrollY.current = currentScrollY
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      className={cn(
        "mx-auto flex justify-between gap-10 items-center transition-all duration-700 p-4 z-50",
        isScrolled
          ? "bg-white/80 backdrop-blur-md dark:bg-zinc-900/80 xl:w-[90%] shadow -translate-y-8 rounded-3xl"
          : "bg-transparent w-full xl:w-[70%]"
      )}
    >
      <div className="flex items-center gap-2">
        <Logo className="size-14" />
      </div>
      <div className="flex flex-1 items-center gap-3 justify-center">
        {links.map((link) => (
          <HeaderLink key={link.title} title={link.title} href={link.href} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
      </div>
    </div>
  )
}

const HeaderLink = ({ title, href }: { title: string; href: string }) => {
  const pathname = usePathname() || "/"
  const isActive = href === pathname
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-full transition-colors",
        isActive
          ? "dark:bg-white dark:text-black bg-zinc-900 text-white"
          : "dark:hover:bg-zinc-800 hover:bg-zinc-100"
      )}
    >
      <Link href={href}>{title}</Link>
    </div>
  )
}
