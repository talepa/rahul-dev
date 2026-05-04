"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { publication } from "@/lib/portfolio-content"
import { education } from "@/lib/portfolio-content"
import { sectionMuted } from "./conicorn-styles"

export function ConicornResearch() {
  return (
    <section id="research" className={`${sectionMuted} px-4 py-16 md:px-6 lg:px-8 lg:py-24`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          number="007"
          kicker="research"
          title="Published work"
          subtitle="Peer-reviewed applied AI in healthcare traceability — the same obsession with correctness I bring to retrieval systems."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-[1.75rem] border border-black/[0.06] bg-white p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-orange-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-700">
                Peer-reviewed paper
              </span>
              <span className="flex items-center gap-1 font-mono text-xs text-neutral-500">
                <Award className="h-3.5 w-3.5" />
                Impact factor {publication.impact}
              </span>
            </div>
            <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight text-neutral-900">
              {publication.title}
            </h3>
            <p className="mt-3 text-sm italic leading-relaxed text-neutral-600">
              “{publication.description}”
            </p>
            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Journal
                </dt>
                <dd className="mt-1 font-medium text-neutral-800">{publication.journal}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Volume / issue
                </dt>
                <dd className="mt-1 font-medium text-neutral-800">{publication.detail}</dd>
              </div>
            </dl>
            <a
              href={publication.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-neutral-800"
            >
              Read on LinkedIn
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="flex flex-col justify-center rounded-[1.75rem] border border-black/[0.06] bg-neutral-900 p-8 text-white"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
              education
            </p>
            <h3 className="font-display mt-3 text-xl font-semibold leading-snug">{education.school}</h3>
            <p className="mt-2 text-sm text-white/70">{education.degree}</p>
            <p className="mt-4 font-mono text-xs text-white/45">{education.period}</p>
            <div className="mt-6 border-t border-white/15 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/45">CGPA</p>
              <p className="font-display text-4xl font-semibold">{education.cgpa}</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
