"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export type StepItem = {
  n: string
  title: string
  body: string
  org?: string
}

type Props = {
  steps: StepItem[]
  variant?: "light" | "dark"
}

export function ConicornStepGrid({ steps, variant = "light" }: Props) {
  const isDark = variant === "dark"

  return (
    <div className="relative">
      {/* subtle connector like Conicorn process rail */}
      <div
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-8 hidden h-px lg:block",
          isDark ? "bg-white/15" : "bg-black/[0.06]"
        )}
        aria-hidden
      />

      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className={cn(
              "flex min-h-[220px] flex-col rounded-[1.35rem] border p-6 lg:min-h-[260px] lg:p-7",
              isDark
                ? "border-white/12 bg-white/[0.06]"
                : "border-neutral-200/80 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            )}
          >
            <span
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold tracking-tight",
                isDark ? "bg-white/10 text-white" : "bg-[#111] text-white"
              )}
            >
              {s.n}
            </span>
            <h3
              className={cn(
                "font-display mt-5 text-base font-semibold leading-snug lg:text-[1.05rem]",
                isDark ? "text-white" : "text-neutral-900"
              )}
            >
              {s.title}
            </h3>
            <p
              className={cn(
                "mt-3 flex-1 text-sm leading-relaxed",
                isDark ? "text-white/60" : "text-neutral-600"
              )}
            >
              {s.body}
            </p>
            {s.org ? (
              <p
                className={cn(
                  "mt-5 border-t pt-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
                  isDark ? "border-white/10 text-white/45" : "border-neutral-100 text-neutral-400"
                )}
              >
                {s.org}
              </p>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
