"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/portfolio-content"

export function FedeExperience() {
  return (
    <section id="experience" className="border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-600">Experience</p>
        <div className="mt-14 space-y-16">
          {experiences.map((ex, i) => (
            <motion.div
              key={`${ex.company}-${ex.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className="grid gap-8 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">{ex.period}</p>
                <p className="mt-3 font-display text-xl text-[#fafaf9]">{ex.company}</p>
              </div>
              <div>
                <p className="font-medium text-neutral-200">{ex.role}</p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-500">
                  {ex.bullets.map((b, j) => (
                    <li key={`${ex.company}-${i}-${j}`} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
