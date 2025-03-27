"use client"

import { cn } from "@/lib/utils"
import React from "react"
import { motion } from "framer-motion"

export const FullScreen = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      layout
      className={cn(
        className,
        "w-full min-h-[calc(100dvh-250px)] flex items-center justify-center"
      )}
    >
      {children}
    </motion.div>
  )
}
