"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { caseStudies } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"
import { AscendSection } from "./AscendSection"

const card =
  "group block h-full rounded-[1.85rem] border border-white/[0.07] bg-white/[0.03] p-5 pb-6 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm outline-none transition hover:border-white/15 hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-violet-500/70"

export function AscendProjects() {
  return (
    <AscendSection
      id="work"
      kicker="// Work"
      title="Repositories and notebooks I stand behind."
      subtitle="Notebook-to-GitHub builds: bottleneck prediction, delivery risk modeling, and engagement analytics."
    >
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
            className={card}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.35rem] bg-zinc-900/90 ring-1 ring-white/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.coverUrl}
                alt=""
                width={440}
                height={587}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={cn(
                  "h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]",
                  c.coverImgClassName
                )}
              />
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/65 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-200 backdrop-blur-md">
                Repo
              </span>
            </div>

            <header className="mt-6 px-0.5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">{c.tagline}</p>
              <h3 className="font-ascend mt-2 text-[1.35rem] font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                {c.title}
              </h3>
            </header>

            <p className="mt-4 px-0.5 text-sm leading-relaxed text-zinc-400">{c.description}</p>

            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-6">
              {c.metrics.map((m) => (
                <div key={m.label} className="min-w-0">
                  <p className="font-ascend truncate text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {m.value}
                  </p>
                  <p className="mt-1 truncate font-mono text-[9px] uppercase tracking-wide text-zinc-500">{m.label}</p>
                </div>
              ))}
            </div>

            <span className="mt-8 flex items-center gap-2 px-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-200">
              GitHub
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 text-zinc-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5"
              />
            </span>
          </motion.a>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-zinc-500">
        Figures match each README; methodologies differ — open repos for evaluation details.
      </p>
    </AscendSection>
  )
}
