"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { caseStudies } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"
import { sectionMuted } from "./conicorn-styles"

const cardSkin =
  "group block h-full rounded-[28px] bg-[#E5E5E5] p-5 pb-6 shadow-[12px_16px_44px_rgba(0,0,0,0.11)] outline-none ring-offset-4 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[14px_20px_52px_rgba(0,0,0,0.14)] focus-visible:ring-2 focus-visible:ring-neutral-800"

export function ConicornProjects() {
  return (
    <section id="projects" className={sectionMuted}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          number="005"
          kicker="case studies"
          title="What I've built"
          subtitle="Three notebooks-to-GitHub builds — bottleneck prediction on synthetic fulfillment telemetry, ghost-order risk on delivery features, and Instagram reach breakdowns."
        />

        <div className="grid gap-10 sm:gap-11 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className={cardSkin}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px] bg-neutral-300/70 shadow-[inset_0_1px_6px_rgba(0,0,0,0.08)]">
                {/* eslint-disable-next-line @next/next/no-img-element -- Socialify SVG + local PNG covers */}
                <img
                  src={c.coverUrl}
                  alt=""
                  width={440}
                  height={587}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.02]",
                    c.coverImgClassName
                  )}
                />
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 shadow-sm backdrop-blur-sm">
                  Repository
                </span>
              </div>

              <header className="mt-6 px-0.5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-600">{c.tagline}</p>
                <h3 className="font-display mt-2 text-[1.35rem] font-semibold leading-snug tracking-tight text-neutral-900 sm:text-2xl">
                  {c.title}
                </h3>
              </header>

              <p className="mt-4 px-0.5 text-sm leading-relaxed text-neutral-700">{c.description}</p>

              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-neutral-400/55 pt-6">
                {c.metrics.map((m) => (
                  <div key={m.label} className="min-w-0">
                    <p className="font-display truncate text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
                      {m.value}
                    </p>
                    <p className="mt-1 truncate font-mono text-[9px] uppercase tracking-wide text-neutral-600">{m.label}</p>
                  </div>
                ))}
              </div>

              <span className="mt-8 flex items-center gap-2 px-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900">
                Open on GitHub
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 text-neutral-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5"
                />
              </span>
            </motion.a>
          ))}
        </div>

        <p className="mt-10 px-1 text-xs leading-relaxed text-neutral-500">
          Stats above match each repository README; evaluation setup and labels differ by project—open the repo for full methodology.
        </p>
      </div>
    </section>
  )
}
