"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { personal } from "@/lib/personal"
import { heroContent } from "@/lib/portfolio-content"
import { ascendBtnGhost, ascendBtnSolid } from "./ascend-styles"

type Props = {
  onContact: () => void
}

export function AscendHero({ onContact }: Props) {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100vh] flex-col justify-center px-5 pb-28 pt-32 md:px-8 md:pb-36 md:pt-40"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-mono text-[12px] font-medium uppercase tracking-[0.35em] text-zinc-500"
        >
          <span className="text-white/80" aria-hidden>
            /
          </span>
          {heroContent.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-ascend mt-10 max-w-5xl text-[clamp(2.5rem,7vw,4.85rem)] font-semibold leading-[1.02] tracking-tight text-white"
        >
          {heroContent.headlineLine1}{" "}
          <span className="block bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent md:inline md:pl-3">
            {heroContent.headlineLine2.trim()}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          {heroContent.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <button type="button" onClick={onContact} className={ascendBtnSolid()}>
            {heroContent.primaryCta}
          </button>
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={`${ascendBtnGhost()} gap-2`}
          >
            {heroContent.secondaryCta}
            <ArrowRight className="h-4 w-4 opacity-60" aria-hidden />
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 transition hover:text-zinc-300"
      >
        <span aria-hidden className="h-14 w-px bg-gradient-to-b from-white/25 to-transparent" />
        Scroll
      </a>
    </section>
  )
}
