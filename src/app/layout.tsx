import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import type { Metadata } from "next"
import {
  JetBrains_Mono,
  IBM_Plex_Mono,
  Geist,
  Geist_Mono,
} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "vietnamese"],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Kinh Bach | Frontend Developer Portfolio",
  description:
    "Explore Kinh Bach's portfolio – a skilled Frontend Developer specializing in Next.js, React, and modern web technologies. Showcasing innovative projects, UI/UX expertise, and high-performance web applications.",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Kinh Bach Portfolio",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "Modern Web Technologies",
  ],
  openGraph: {
    title: "Kinh Bach | Frontend Developer Portfolio",
    description:
      "Discover Kinh Bach's expertise in Frontend Development, React, and Next.js. View projects, case studies, and technical skills.",
    url: "https://kinhdev.id.vn",
    type: "website",
    images: [
      {
        url: "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/portfolio/openGraph-mhPZLB76CDzNO6yFkIPl98M6H6jbQQ.png",
        width: 1200,
        height: 630,
        alt: "Kinh Bach - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinh Bach | Frontend Developer Portfolio",
    description:
      "Explore Kinh Bach's frontend projects and expertise in React, Next.js, and modern web development.",
    images: [
      "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/portfolio/openGraph-mhPZLB76CDzNO6yFkIPl98M6H6jbQQ.png",
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} ${geistSans.variable} ${geistMono.variable} ${ibmPlexMono.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
