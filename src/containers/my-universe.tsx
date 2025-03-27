"use client"
import { AuroraText } from "@/components/magicui/aurora-text"
import {
  AnimationVariant,
  TextAnimate,
} from "@/components/magicui/text-animate"
import { Compare } from "@/components/ui/compare"
import { SparklesText } from "@/components/ui/sparkles-text"
import { memo, useEffect, useState } from "react"
import { motion } from "framer-motion"

const texts = [
  "Front-End Developer & UI/UX Enthusiast",
  "JavaScript Developer",
  "React Developer & Next.js Developer",
  "UI/UX Designer & Graphic Designer",
  "Animation Developer & Motion Developer",
  "Smooth Transition",
]

const animationTypes: AnimationVariant[] = [
  "fadeIn",
  "blurIn",
  "blurInUp",
  "blurInDown",
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
  "scaleUp",
  "scaleDown",
]

export const MyUniverse = () => {
  const [currentText, setCurrentText] = useState(texts[0])
  const [currentAnimation, setCurrentAnimation] = useState(animationTypes[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const textIndex = texts.indexOf(prev)
        if (textIndex === texts.length - 1) {
          return texts[0]
        }

        return texts[textIndex + 1]
      })
      setCurrentAnimation(
        animationTypes[Math.floor(Math.random() * animationTypes.length)]
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 relative">
        <div className="text-xs bg-zinc-100 dark:bg-gray-800/50 w-max rounded-full border flex items-center gap-2">
          <div className="size-2 rounded-full bg-indigo-700 font-medium animate-pulse" />
          Welcome to my universe
        </div>
        <SparklesText
          text="Hello"
          className="mt-14 text-7xl dark:text-zinc-300 text-zinc-700 font-[family-name:var(--font-geist-sans)]"
        />
        <Title />
        <div className="px-3 py-2 absolute top-8 left-32 bg-purple-500/20 rounded-[6px] w-max font-medium dark:text-purple-300 text-purple-500 border border-purple-500/20 animate-wiggle duration-1000">
          UI Magic
        </div>

        <div className="px-3 py-2 absolute top-28 right-28 bg-blue-500/20 rounded-[6px] w-max font-medium dark:text-blue-300 text-blue-500 border border-blue-500/20 animate-wiggle duration-1000">
          Clean Code
        </div>

        <div className="px-3 py-2 absolute bottom-20 right-16 bg-yellow-500/20 rounded-[6px] w-max font-medium dark:text-yellow-300 text-yellow-500 border border-yellow-500/20 animate-wiggle duration-1000">
          Innovation
        </div>

        <motion.div
          layout
          className="w-fit py-2 px-8 bg-blue-500/20 dark:text-blue-200 rounded-xl text-blue-500 border border-blue-500/20 text-xl font-bold mt-5"
        >
          <TextAnimate
            duration={1}
            animation={currentAnimation}
            by="character"
            startOnView={false}
          >
            {currentText}
          </TextAnimate>
        </motion.div>
        <div className="text-lg font-bold text-zinc-600 dark:text-zinc-400 mt-10">
          React Enthusiast ⚛️ | Next.js Explorer 🚀 | <br /> Building Scalable
          UIs & Crafting the Future of Web 💻✨
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <CompareDemo />
      </div>
    </div>
  )
}

export function CompareDemo() {
  return (
    <div className="p-4 w-max border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://voocgavdbpy2gucg.public.blob.vercel-storage.com/portfolio/image%20%283%29-9ohWXR6mPsqfP9GC3OXB6l23pKXqpS.png"
        secondImage="https://voocgavdbpy2gucg.public.blob.vercel-storage.com/portfolio/image%20%284%29-Z38KH4uoJOoyhY6YDXVDNxRu8uWZUS.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[600px] md:w-[700px]"
        slideMode="hover"
      />
    </div>
  )
}

export const Title = memo(() => {
  return (
    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl mt-4 dark:text-zinc-300 text-zinc-700 font-[family-name:var(--font-geist-sans)]">
      I&apos;m <AuroraText>Kinh Bach</AuroraText>
    </h1>
  )
})

Title.displayName = "Title"
