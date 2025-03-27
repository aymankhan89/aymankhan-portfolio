import { Ripple } from "@/components/magicui/ripple"
import { Card, CardContent } from "@/components/ui/card"
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react"
import { UserRound } from "lucide-react"
import Image from "next/image"

export function MyInformation() {
  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <Card className="col-span-2 dark:bg-black/50 bg-white/50 p-0">
        <CardContent className="!p-0">
          <div className="relative flex h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
            <Image
              src="/images/kinhdev-avt.png"
              alt="avatar"
              width={280}
              height={280}
              className="absolute bottom-1 z-10"
            />
            <Ripple />
          </div>
        </CardContent>
      </Card>
      <Card className="dark:bg-black/50 bg-white/50 col-span-3">
        <CardContent className="p-10">
          <div className="flex gap-4 items-center justify-between">
            <div className="flex items-center gap-6">
              <UserRound className="size-8 text-neutral-900 dark:text-neutral-100 relative z-20" />
              <div>
                <p className="text-xl relative z-20 mt-2 font-medium">
                  Bach Duong Kinh
                </p>
                <p className="relative z-20 text-neutral-500 font-medium uppercase">
                  Digital Fortress Co., Ltd.
                </p>
                <p className="relative z-20 text-neutral-500 font-medium uppercase">
                  Frontend Developer
                </p>
              </div>
            </div>
            <SocialNetwork />
          </div>
          <div className="mt-10 mb-7 text-7xl max-w-[70%] font-bold font-[family-name:var(--font-geist-sans)]">
            Passionate to pursue the technology.
          </div>
          <p className="relative z-20 text-neutral-500 font-medium w-[75%]">
            I enjoy learning new things and try to overcome new challenges while
            analyzing how I improved through them.
          </p>
        </CardContent>
      </Card>
    </div>
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
    <div className="relative z-20">
      <div className="flex items-center gap-2">
        {networks.map((network) => (
          <a
            key={network.name}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
          >
            <network.icon className="size-8" />
          </a>
        ))}
      </div>
    </div>
  )
}
