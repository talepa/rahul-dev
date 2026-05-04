"use client"

import { motion } from "framer-motion"
import { aboutIntro, aboutStats, education } from "@/lib/portfolio-content"

export function FedeAbout() {
  return (
    <section id="about" className="border-t border-neutral-900 bg-[#0c0c0c]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-600">About</p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 max-w-3xl text-xl leading-relaxed text-neutral-300 md:text-2xl"
        >
          {aboutIntro}
        </motion.p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-l border-neutral-800 pl-6"
            >
              <p className="font-display text-3xl font-medium text-[#fafaf9]">{s.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">{s.label}</p>
              <p className="mt-1 text-sm text-neutral-600">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 border-t border-neutral-800 pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600">Education</p>
          <p className="mt-4 font-display text-2xl text-[#fafaf9]">{education.degree}</p>
          <p className="mt-2 text-neutral-500">
            {education.school} · {education.period} · CGPA {education.cgpa}
          </p>
        </div>
      </div>
    </section>
  )
}
