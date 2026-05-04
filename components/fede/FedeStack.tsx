"use client"

import { motion } from "framer-motion"
import { techPills } from "@/lib/portfolio-content"

export function FedeStack() {
  return (
    <section id="stack" className="border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-600">Stack</p>
        <div className="mt-10 flex flex-wrap gap-2">
          {techPills.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.02, 0.4) }}
              className="rounded-full border border-neutral-800 bg-[#111111] px-4 py-2 text-[12px] text-neutral-400"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
