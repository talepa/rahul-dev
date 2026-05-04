"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { capabilityBlocks, trustItems } from "@/lib/portfolio-content"
import { btnPrimary, sectionSurface } from "./conicorn-styles"

type Props = {
  onSession: () => void
}

export function ConicornCapabilities({ onSession }: Props) {
  return (
    <section id="capabilities" className={`${sectionSurface} px-4 py-16 md:px-6 lg:px-8 lg:py-24`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          number="003"
          kicker="capabilities"
          title="Where I deliver the most leverage"
          subtitle="From embeddings and retrieval to classical ML and stakeholder-ready analytics — scoped to what moves your KPIs."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {capabilityBlocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-[1.75rem] border border-black/[0.06] bg-[#faf8f5] p-8"
            >
              <h3 className="font-display text-xl font-semibold text-neutral-900">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{b.summary}</p>
              <ul className="mt-5 space-y-2">
                {b.bullets.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-neutral-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-start gap-6 rounded-[1.75rem] border border-orange-500/25 bg-gradient-to-br from-orange-500/10 to-transparent p-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Sparkles className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-neutral-900">
                Not sure where to start?
              </p>
              <p className="mt-1 max-w-md text-sm text-neutral-600">
                Tell me about your data and goals — I&apos;ll suggest an honest first milestone (often smaller than you think).
              </p>
            </div>
          </div>
          <button type="button" onClick={onSession} className={btnPrimary("shrink-0 !tracking-[0.16em]")}>
            Get in touch
          </button>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 rounded-xl border border-black/[0.06] bg-white px-4 py-3 text-sm font-medium text-neutral-700"
            >
              <Check className="h-4 w-4 text-emerald-600" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
