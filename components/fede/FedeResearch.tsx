"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { publication } from "@/lib/portfolio-content"

export function FedeResearch() {
  return (
    <section id="research" className="border-t border-neutral-900 bg-[#0c0c0c]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-600">Research</p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-3xl"
        >
          <h2 className="font-display text-2xl font-medium leading-snug text-[#fafaf9] md:text-3xl">
            {publication.title}
          </h2>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
            {publication.journal} · {publication.detail}
          </p>
          <p className="mt-2 text-sm text-neutral-600">Impact factor · {publication.impact}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-neutral-400">{publication.description}</p>
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-200 hover:text-[#fafaf9]"
          >
            View post
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
