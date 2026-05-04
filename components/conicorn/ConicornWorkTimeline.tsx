"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"

function monogram(company: string) {
  const parts = company.trim().split(/\s+/)
  if (parts.length >= 2) {
    const a = parts[0]?.[0]
    const b = parts[1]?.[0]
    if (a && b) return (a + b).toUpperCase()
  }
  return company.slice(0, 2).toUpperCase()
}

function IconPanel({ company }: { company: string }) {
  const cyber = company.toLowerCase().includes("cyber")
  return (
    <div
      className={cn(
        "flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center rounded-[1.1rem] font-display text-xl font-bold tracking-tight text-white shadow-[0_14px_36px_rgba(0,0,0,0.22)] md:h-28 md:w-28 md:text-2xl",
        cyber
          ? "bg-gradient-to-br from-slate-600 via-slate-800 to-neutral-950"
          : "bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600"
      )}
      aria-hidden
    >
      {monogram(company)}
    </div>
  )
}

function StepCluster({
  step,
  company,
  iconFirst,
}: {
  step: string
  company: string
  iconFirst: boolean
}) {
  const stepEl = (
    <span className="font-mono text-xs font-bold tracking-wider text-neutral-400">{step}</span>
  )
  return (
    <div className="flex items-center gap-4 md:gap-5">
      {iconFirst ? (
        <>
          <IconPanel company={company} />
          {stepEl}
        </>
      ) : (
        <>
          {stepEl}
          <IconPanel company={company} />
        </>
      )}
    </div>
  )
}

export function ConicornWorkTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        className="pointer-events-none absolute left-0 top-2 bottom-2 hidden w-px bg-neutral-300/90 md:left-1/2 md:block md:-translate-x-1/2"
        aria-hidden
      />

      <div className="flex flex-col gap-2 md:gap-4">
        {experiences.map((exp, i) => {
          const step = String(i + 1).padStart(2, "0")
          const iconLeft = i % 2 === 0

          const body = (
            <div className="space-y-4">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {exp.period}
              </p>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-base font-medium text-neutral-800">{exp.company}</p>
              </div>
              <ul className="space-y-2.5 text-sm leading-relaxed text-neutral-600">
                {exp.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-neutral-400"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )

          return (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.48, delay: i * 0.08 }}
              className="relative border-l-2 border-neutral-200 py-10 pl-8 md:border-l-0 md:py-0 md:pl-0"
            >
              <span
                className="absolute left-0 top-[2.75rem] z-[1] h-3 w-3 -translate-x-1/2 rounded-full border-[3px] border-[#EDEAE4] bg-gradient-to-br from-orange-400 to-rose-500 shadow-sm md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                aria-hidden
              />

              <div className="md:hidden">
                <div className="flex items-center gap-4 pb-6">
                  <StepCluster step={step} company={exp.company} iconFirst />
                </div>
                {body}
              </div>

              <div
                className={cn(
                  "relative hidden py-12 md:grid md:grid-cols-2 md:items-center md:gap-0 md:py-16 md:pl-0",
                  i < 2 &&
                    "rounded-[2rem] bg-[#f4f1ea]/95 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] md:p-10 lg:p-12"
                )}
              >
                {iconLeft ? (
                  <>
                    <div className="flex justify-end pr-8 lg:pr-14">
                      <StepCluster step={step} company={exp.company} iconFirst />
                    </div>
                    <div className="pl-8 lg:pl-14">{body}</div>
                  </>
                ) : (
                  <>
                    <div className="pr-8 text-right lg:pr-14">{body}</div>
                    <div className="flex justify-start pl-8 lg:pl-14">
                      <StepCluster step={step} company={exp.company} iconFirst={false} />
                    </div>
                  </>
                )}
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
