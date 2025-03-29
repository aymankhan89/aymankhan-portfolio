"use client"

import { cn } from "@/lib/utils"
import { IconBrandGithub, IconMenu2, IconX } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { ModeToggle } from "../mode-toggle"
import { Logo } from "../svg/logo"
import { Button } from "../ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"

const links = [
  {
    title: "All",
    href: "/",
  },

  {
    title: "Projects",
    href: "/projects",
    isComingSoon: true,
  },
  {
    title: "About",
    href: "/about",
    isComingSoon: true,
  },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
        "mx-auto flex justify-between gap-10 items-center transition-all duration-300 p-4 z-50 ",
        isScrolled
          ? "bg-white/80 backdrop-blur-md md:p-6 dark:bg-zinc-900/80 xl:w-[90%] shadow -translate-y-8 md:rounded-3xl"
          : "bg-transparent w-full xl:w-[70%]"
      )}
    >
      <div className="flex items-center gap-2">
        <Logo className="size-14" />
      </div>
      <div className="flex-1 items-center gap-3 justify-center hidden sm:flex">
        {links.map((link) => (
          <HeaderLink key={link.title} title={link.title} href={link.href} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <a
          href={"#"}
          target="_blank"
          rel="noopener noreferrer"
          className="border p-2 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
        >
          <IconBrandGithub />
        </a>
        <ModeToggle />

        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border size-10 rounded-xl p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 sm:hidden"
            >
              <IconMenu2 />
              <span className="sr-only">Menu</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="min-h-dvh">
            <DrawerHeader className="flex justify-between">
              <DrawerTitle className="flex items-center gap-2">
                <Logo className="size-14" />
                kinhdev.id.vn
              </DrawerTitle>
              <DrawerClose asChild className="self-end -translate-y-14">
                <Button variant="outline" size="icon">
                  <IconX />
                </Button>
              </DrawerClose>
            </DrawerHeader>

            <div className="px-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-2 font-medium text-xl"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {link.title}
                  {link.isComingSoon && (
                    <span className="text-sm bg-blue-300/10 text-blue-500 px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
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
