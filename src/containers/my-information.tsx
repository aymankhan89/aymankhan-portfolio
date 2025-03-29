"use client"

import { IconCloud } from "@/components/magicui/icon-cloud"
import { Ripple } from "@/components/magicui/ripple"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react"
import { Download, Eye, UserRound } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function MyInformation() {
  const router = useRouter()

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          <Card className="col-span-1 md:col-span-1 lg:col-span-2 dark:bg-black/50 bg-white/50 p-0 order-2 md:order-1">
            <CardContent className="!p-0 h-full">
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
                <Image
                  src="/images/Subject4.png"
                  alt="avatar"
                  width={1000}
                  height={1000}
                  className="z-10 object-contain md:translate-y-32 hidden dark:block"
                />

                <Image
                  src="/images/Subject5.png"
                  alt="avatar"
                  width={1000}
                  height={1000}
                  className="z-10 object-contain md:translate-y-32 dark:hidden"
                />
                <Ripple className="" />
              </div>
            </CardContent>
          </Card>
          <Card className="dark:bg-black/50 bg-white/50 col-span-1 md:col-span-2 lg:col-span-3 order-1 md:order-2">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-6">
                  <UserRound className="size-6 sm:size-8 text-neutral-900 dark:text-neutral-100 relative z-20" />
                  <div>
                    <p className="text-lg sm:text-xl relative z-20 mt-2 font-medium">
                      Bach Duong Kinh
                    </p>
                    <p className="relative z-20 text-sm sm:text-base text-neutral-500 font-medium uppercase">
                      Digital Fortress Co., Ltd.
                    </p>
                    <p className="relative z-20 text-sm sm:text-base text-neutral-500 font-medium uppercase">
                      Frontend Developer
                    </p>
                  </div>
                </div>
                <SocialNetwork />
              </div>
              <div className="my-6 sm:mt-8 md:mt-10 mb-4 sm:mb-5 md:mb-7 text-2xl sm:text-4xl md:text-5xl lg:text-7xl w-full md:max-w-[80%] lg:max-w-[70%] font-bold font-[family-name:var(--font-geist-sans)]">
                Passionate to pursue the technology.
              </div>
              <p className="relative z-20 text-sm sm:text-base text-neutral-500 font-medium w-full md:w-[80%] lg:w-[75%]">
                I enjoy learning new things and try to overcome new challenges
                while analyzing how I improved through them.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        <Card className="dark:bg-black/50 bg-white/50 col-span-1 md:col-span-2 lg:col-span-4 order-2 md:order-1">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center">
            <IconCloud images={images} />
          </CardContent>
        </Card>
        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-between gap-6 order-1 md:order-2">
          <Card className="dark:bg-black/50 bg-white/50 p-0 py-4 ">
            <CardContent className="p-0">
              <VelocityScroll className="!text-xl md:!text-3xl opacity-50">
                ⭐ Personal Portfolio
              </VelocityScroll>
            </CardContent>
          </Card>

          <Card className="dark:bg-black/50 bg-white/50">
            <CardContent className="flex gap-4 justify-between px-8 items-center">
              <div className="flex flex-col gap-2 justify-between">
                <p className="text-lg text-zinc-500">2025 CV</p>
                <p className="text-xl md:text-2xl font-bold uppercase">
                  Resume
                </p>
              </div>
              <div className="flex gap-2 justify-between">
                <Button variant="outline" size="icon">
                  <Eye />
                </Button>

                <Button variant="outline" size="icon">
                  <Download />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 flex-1">
            <Card className="dark:bg-black/50 bg-white/50">
              <CardContent className="flex flex-col justify-between gap-4">
                <Image
                  src="/images/emoji.webp"
                  alt="avatar"
                  width={1000}
                  height={1000}
                  className="flex-1"
                />
                <div
                  className="flex flex-col gap-1 cursor-pointer"
                  onClick={() => router.push("/about")}
                >
                  <p className="text-lg text-zinc-500 uppercase">About me</p>
                  <p className="text-lg font-medium">Credentials</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-black/50 bg-white/50">
              <CardContent className="flex flex-col justify-between gap-4 h-full">
                <div className="flex-1">
                  <p className="text-center mb-5 font-bold text-lg text-nowrap">
                    My Project
                  </p>
                  <Image
                    src="/images/project-icon.webp"
                    alt="avatar"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div
                  className="flex flex-col gap-1 cursor-pointer"
                  onClick={() => router.push("/projects")}
                >
                  <p className="text-lg text-zinc-500 uppercase">Show cases</p>
                  <p className="text-lg font-medium">Project</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

const networks = [
  {
    name: "Github",
    icon: IconBrandGithub,
    href: "https://github.com/duongkinh2000",
  },
  {
    name: "Linkedin",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/duong-kinh-2000/",
  },
  {
    name: "Email",
    icon: IconMail,
    href: "mailto:duong.kinh.2000@gmail.com",
  },
  {
    name: "Facebook",
    icon: IconBrandFacebook,
    href: "https://www.facebook.com/duong.kinh.50303",
  },
  {
    name: "Instagram",
    icon: IconBrandInstagram,
    href: "https://www.instagram.com/duongkinh2000/",
  },
]

const SocialNetwork = () => {
  return (
    <div className="relative z-20 mt-4 sm:mt-0">
      <div className="flex flex-wrap items-center gap-2">
        {networks.map((network) => (
          <a
            key={network.name}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 rounded-xl sm:rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
          >
            <network.icon className="size-5 sm:size-6 md:size-7 lg:size-8" />
          </a>
        ))}
      </div>
    </div>
  )
}
