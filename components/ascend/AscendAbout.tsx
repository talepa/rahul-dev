"use client"

import { motion } from "framer-motion"
import { aboutIntro, aboutStats } from "@/lib/portfolio-content"
import { AscendSection } from "./AscendSection"

export function AscendAbout() {
  return (
    <AscendSection
      id="about"
      kicker="// Who I am"
      title="Science-minded AI engineering — shipped end to end, not slideware."
      subtitle={aboutIntro}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-6 backdrop-blur-sm"
          >
            <p className="font-ascend text-3xl font-semibold tracking-tight text-white md:text-4xl">{s.value}</p>
            <p className="mt-3 text-sm font-semibold text-zinc-200">{s.label}</p>
            <p className="mt-2 font-mono text-[11px] text-zinc-500">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </AscendSection>
  )
}
