"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"
import { aboutIntro, aboutStats } from "@/lib/portfolio-content"
import { sectionSurface } from "./conicorn-styles"

export function ConicornAbout() {
  return (
    <section id="about" className={`${sectionSurface} px-4 py-20 md:px-6 lg:px-8 lg:py-28`}>
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/[0.06] bg-[#faf8f5] p-8 md:p-12 lg:p-16">
        <SectionHeader
          number="001"
          kicker="who i am"
          title="Science-minded AI engineering — shipped, not theorized."
          subtitle={aboutIntro}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm"
            >
              <p className="font-display text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-neutral-900">{s.label}</p>
              <p className="mt-1 font-mono text-[11px] text-neutral-500">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
