"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { AscendSection } from "./AscendSection"
import { education, publication } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"
import { ascendBtnSolid } from "./ascend-styles"

export function AscendResearch() {
  return (
    <AscendSection
      id="research"
      kicker="// Research"
      title="Publication and formal training."
      subtitle="Peer-reviewed work in healthcare AI traceability, plus CS degree metrics recruiters expect on a CV screen."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-orange-400/35 bg-orange-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-200">
              Peer-reviewed
            </span>
            <span className="flex items-center gap-1 font-mono text-xs text-zinc-500">
              <Award className="h-3.5 w-3.5" aria-hidden />
              IF {publication.impact}
            </span>
          </div>
          <h3 className="font-ascend mt-5 text-2xl font-semibold tracking-tight text-white md:text-[1.65rem]">
            {publication.title}
          </h3>
          <p className="mt-3 text-sm italic leading-relaxed text-zinc-400">“{publication.description}”</p>
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Journal</dt>
              <dd className="mt-1 font-medium text-zinc-200">{publication.journal}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Volume / issue</dt>
              <dd className="mt-1 font-medium text-zinc-200">{publication.detail}</dd>
            </div>
          </dl>
          <a
            href={publication.link}
            target="_blank"
            rel="noreferrer"
            className={cn(
              ascendBtnSolid(),
              "mt-8 inline-flex gap-2 !normal-case !tracking-normal !text-sm !font-semibold"
            )}
          >
            Read on LinkedIn
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="flex flex-col justify-center rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-violet-950/50 to-[#0a0a0c] p-8 text-white"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Education</p>
          <h3 className="font-ascend mt-3 text-xl font-semibold leading-snug">{education.school}</h3>
          <p className="mt-2 text-sm text-zinc-400">{education.degree}</p>
          <p className="mt-4 font-mono text-xs text-zinc-500">{education.period}</p>
          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">CGPA</p>
            <p className="font-ascend text-4xl font-semibold">{education.cgpa}</p>
          </div>
        </motion.aside>
      </div>
    </AscendSection>
  )
}
