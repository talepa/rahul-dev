"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { caseStudies } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"
import { fedeVisitArrow } from "./fede-theme"

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 24)
}

export function FedeProjects() {
  return (
    <section id="projects" className="border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-600">Project</p>
        <p className="mt-2 font-mono text-[11px] text-neutral-500">
          <span className="text-neutral-400">{String(caseStudies.length).padStart(2, "0")}</span> · Number
        </p>

        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:mt-20 md:block md:overflow-visible md:pb-0">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="w-[min(100vw-2rem,520px)] shrink-0 snap-center md:w-full md:snap-none"
            >
              <a href={c.href} target="_blank" rel="noreferrer" className="group block">
                <h2 className="font-display text-3xl font-medium lowercase tracking-tight text-[#fafaf9] transition-colors group-hover:text-white md:text-4xl lg:text-[2.75rem]">
                  {slugify(c.title)}
                </h2>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                  Stack. {c.tagline.split("·")[0]?.trim() ?? "GitHub"}
                  <span className="text-neutral-600"> · Year. </span>
                  <span className="text-neutral-400">2024–2026</span>
                </p>
                <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-400">{c.description}</p>

                <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 md:aspect-[16/10]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.coverUrl}
                    alt=""
                    width={1200}
                    height={750}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={cn(
                      "h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.02]",
                      c.coverImgClassName
                    )}
                />
                </div>

                <span className={fedeVisitArrow("mt-8")}>
                  Visit
                  <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
              {i < caseStudies.length - 1 ? (
                <div className="hidden h-px w-full bg-neutral-900 md:my-24 md:block" aria-hidden />
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
