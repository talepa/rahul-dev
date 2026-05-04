"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { personal } from "@/lib/personal"
import { heroContent } from "@/lib/portfolio-content"

type Props = {
  onContact: () => void
}

export function FedeHero({ onContact }: Props) {
  return (
    <section
      id="top"
      className="relative min-h-[88vh] px-4 pb-24 pt-28 md:min-h-[90vh] md:px-8 md:pb-32 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(250,250,249,0.06),transparent)]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500"
        >
          portfolio · {new Date().getFullYear()}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-8 font-display text-[clamp(2rem,6vw,3.75rem)] font-medium leading-[1.08] tracking-tight text-[#fafaf9]"
        >
          Hi, I&apos;m {personal.nameFirst}!{" "}
          <span className="text-neutral-500">{personal.roleTitle.toLowerCase()} and data scientist.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl"
        >
          {heroContent.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={onContact}
            className="rounded-full bg-[#fafaf9] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {heroContent.primaryCta}
          </button>
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-200 transition-colors hover:border-neutral-500 hover:text-[#fafaf9]"
          >
            <Github className="h-4 w-4" aria-hidden />
            {heroContent.secondaryCta}
            <ArrowUpRight className="h-4 w-4 opacity-60" aria-hidden />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-16 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-600"
        >
          scroll · swipe to discover
        </motion.p>
      </div>
    </section>
  )
}
