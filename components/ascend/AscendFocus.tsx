"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { capabilityBlocks, trustItems, values } from "@/lib/portfolio-content"

export function AscendFocus() {
  return (
    <section className="relative z-10 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-violet-400/95">
              // Principles
            </p>
            <h2 className="font-ascend mt-8 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              How I approach the work.
            </h2>
            <ul className="mt-12 space-y-10">
              {values.map((v, i) => (
                <motion.li
                  key={v.n}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-l border-violet-500/40 pl-6"
                >
                  <span className="font-mono text-xs text-zinc-500">{v.n}</span>
                  <h3 className="font-display mt-2 text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{v.body}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-400/90">
              // Capabilities
            </p>
            <h2 className="font-ascend mt-8 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Where I create leverage.
            </h2>
            <div className="mt-12 space-y-8">
              {capabilityBlocks.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 md:p-7"
                >
                  <h3 className="font-display text-lg font-semibold text-white">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{b.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {b.bullets.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-3 border-t border-white/[0.06] pt-12">
          {trustItems.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
