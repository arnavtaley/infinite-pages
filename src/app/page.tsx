"use client"

import { FixedNavbar } from "@/components/custom/fixed-navbar"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function LandingPage() {
  const { theme } = useTheme()

  return (
    <section className="flex flex-col min-h-screen">
      <FixedNavbar />
        { theme === "light" ? (
          <Image 
          className="w-full px-6 py-4 border-t border-b border-foreground/10 "
          src={`/assets/the-blog-dark.svg`}
          alt="The Blog Logo"
          width={500}
          height={300}
          priority
        />
        ) : (
          <Image 
          className="w-full px-6 py-4 border-t border-b border-foreground/10 "
          src={`/assets/the-blog-light.svg`}
          alt="The Blog Logo"
          width={500}
          height={300}
          priority
        /> )}
    </section>
  )
}