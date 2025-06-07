import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Ayman Khan ",
  description:
    "Learn more about Ayman Khan - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Ayman Khan",
    "About Ayman Khan",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About |Ayman Khan",
    description:
      "Discover the story and journey of Ayman Khan in the world of web development.",
    url: "",
    siteName: "Ayman Khan",
    type: "website",
    locale: "en_US",
    images: [
      
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Ayman Khan",
    description:
      "Learn more about Ayman Khan - Frontend Developer and tech enthusiast.",
    // images: ["https://kinhdev.id.vn/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "#",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
