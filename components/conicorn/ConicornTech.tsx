"use client"

import { Github } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { techPills } from "@/lib/portfolio-content"
import { personal } from "@/lib/personal"
import { cn } from "@/lib/utils"
import { sectionSurface, btnSecondary } from "./conicorn-styles"

export function ConicornTech() {
  const row = [...techPills, ...techPills]

  return (
    <section id="stack" className={`overflow-hidden border-y border-neutral-200/90 ${sectionSurface}`}>
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 md:px-6 md:pb-18 md:pt-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionHeader
              number="006"
              kicker="integrations"
              title="Technology ecosystem"
              subtitle="The same toolkit behind semantic search pipelines, classical ML systems, and stakeholder-ready dashboards."
            />
          </div>
          <div className="shrink-0 lg:pb-[2.5rem]">
            <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-900 px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-md">
              Explore my stack
            </span>
          </div>
        </div>
      </div>

      <div className="relative space-y-3 pb-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#FDFCF9] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#FDFCF9] to-transparent" />

        <div className="flex w-max gap-3 animate-marquee">
          {row.map((pill, idx) => (
            <span
              key={`a-${pill}-${idx}`}
              className="shrink-0 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className={cn("flex w-max gap-3 animate-marquee-reverse opacity-95")}>
          {[...row].reverse().map((pill, idx) => (
            <span
              key={`b-${pill}-${idx}`}
              className="shrink-0 rounded-full border border-neutral-300/70 bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-16 pt-12 text-center md:px-6">
        <p className="text-sm leading-relaxed text-neutral-600">
          Retrieval, ML, and reporting connect across one stack — from notebooks you can audit to APIs your product can ship.
        </p>
        <a
          href={personal.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={btnSecondary("mt-8 gap-2 !font-bold !tracking-[0.14em]")}
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </section>
  )
}
