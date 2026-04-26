'use client'

import React, { useState } from 'react'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import Skills from '@/components/Skills'
import GitHubSection from '@/components/GitHubSection'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorTrail from '@/components/CursorTrail'
import DynamicBackground from '@/components/DynamicBackground'
import ContactCard from '@/components/ContactCard'
import CommandPalette from '@/components/CommandPalette'
import EasterEgg from '@/components/EasterEgg'
import ScrollProgress from '@/components/ScrollProgress'

import ScrollSection from '@/components/ScrollSection'
import SmoothScroll from '@/components/SmoothScroll'
import { motion, AnimatePresence } from 'framer-motion'

import IntroScreen from '@/components/IntroScreen'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <main className="min-h-screen bg-[#020205]">
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <IntroScreen key="intro-screen" onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>

      {hasEntered && (
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ContactCard isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          <DynamicBackground />
          <ScrollProgress />
          <CursorTrail />
          <CommandPalette />
          <EasterEgg />
          <Navbar onContactClick={() => setIsContactOpen(true)} />

          <SmoothScroll>
            <Hero onContactClick={() => setIsContactOpen(true)} />
            
            <ScrollSection id="about">
              <About />
            </ScrollSection>
            
            <ScrollSection id="experience">
              <Experience />
            </ScrollSection>
            
            <ScrollSection id="projects">
              <Projects />
            </ScrollSection>
            
            <ScrollSection id="publications">
              <Publications />
            </ScrollSection>
            
            <ScrollSection id="skills">
              <Skills />
            </ScrollSection>
            
            <ScrollSection id="github">
              <GitHubSection />
            </ScrollSection>
            
            <ScrollSection id="contact">
              <Contact />
            </ScrollSection>
            
            <ScrollSection id="footer">
              <Footer />
            </ScrollSection>
          </SmoothScroll>
        </motion.div>
      )}
    </main>
  )
}
