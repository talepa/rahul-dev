"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"
import { values } from "@/lib/portfolio-content"
import { sectionMuted } from "./conicorn-styles"

export function ConicornValues() {
  return (
    <section id="values" className={`${sectionMuted} px-4 py-16 md:px-6 lg:px-8 lg:py-24`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          number="002"
          kicker="values"
          title="Why teams work with me"
          subtitle="I optimise for clarity, reproducibility, and outcomes your stakeholders can defend in a meeting."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.article
              key={v.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-[1.75rem] border border-black/[0.06] bg-white p-8 shadow-sm"
            >
              <span className="font-mono text-xs text-neutral-400">{v.n}</span>
              <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-neutral-900">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{v.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
