"use client"

import { Github } from "lucide-react"
import { personal } from "@/lib/personal"
import { techPills } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"
import { ascendBtnGhost } from "./ascend-styles"

export function AscendTech() {
  const row = [...techPills, ...techPills]

  return (
    <section id="stack" className="relative z-10 overflow-hidden border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 pb-6 pt-20 md:px-8 md:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-violet-400/95">
              // Stack
            </p>
            <h2 className="font-ascend mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Tools behind shipped ML and search.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              Same toolkit for embeddings, classical ML, dashboards, and APIs — from notebooks to production handoffs.
            </p>
          </div>
          <span className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-200">
            Live stack
          </span>
        </div>
      </div>

      <div className="relative space-y-3 pb-4 pt-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#030304] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#030304] to-transparent" />

        <div className="flex w-max gap-3 animate-marquee">
          {row.map((pill, idx) => (
            <span
              key={`a-${pill}-${idx}`}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className={cn("flex w-max gap-3 animate-marquee-reverse opacity-90")}>
          {[...row].reverse().map((pill, idx) => (
            <span
              key={`b-${pill}-${idx}`}
              className="shrink-0 rounded-full border border-violet-500/25 bg-violet-950/40 px-6 py-2.5 text-sm font-semibold text-violet-100 shadow-md"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 pb-20 pt-10 text-center md:px-8">
        <a
          href={personal.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={ascendBtnGhost("mt-4 gap-2 !normal-case !tracking-normal")}
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </section>
  )
}
