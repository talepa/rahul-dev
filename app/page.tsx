"use client"

import { useState } from "react"
import ContactCard from "@/components/ContactCard"
import CommandPalette from "@/components/CommandPalette"

import { FedeScrollProgress } from "@/components/fede/FedeScrollProgress"
import { FedeNavbar } from "@/components/fede/FedeNavbar"
import { FedeHero } from "@/components/fede/FedeHero"
import { FedeProjects } from "@/components/fede/FedeProjects"
import { FedeAbout } from "@/components/fede/FedeAbout"
import { FedeExperience } from "@/components/fede/FedeExperience"
import { FedeCerts } from "@/components/fede/FedeCerts"
import { FedeStack } from "@/components/fede/FedeStack"
import { FedeResearch } from "@/components/fede/FedeResearch"
import { FedeFooter } from "@/components/fede/FedeFooter"

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <FedeScrollProgress />
      <CommandPalette />
      <ContactCard isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      <main className="relative min-h-screen bg-[#0a0a0a] text-neutral-200 selection:bg-neutral-700 selection:text-[#fafaf9]">
        <FedeNavbar />
        <FedeHero onContact={() => setContactOpen(true)} />
        <FedeProjects />
        <FedeAbout />
        <FedeExperience />
        <FedeCerts />
        <FedeStack />
        <FedeResearch />
        <FedeFooter onContact={() => setContactOpen(true)} />
      </main>
    </>
  )
}
