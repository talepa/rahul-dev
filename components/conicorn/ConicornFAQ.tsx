"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionHeader } from "./SectionHeader"
import { faqs } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"
import { sectionSurface } from "./conicorn-styles"

export function ConicornFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className={`${sectionSurface} px-4 py-16 md:px-6 lg:px-8 lg:py-24`}>
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          number="008"
          kicker="faqs"
          title="Common questions"
          subtitle="Straight answers recruiters and hiring managers usually ask upfront."
          className="text-center [&_h2]:mx-auto [&_p]:mx-auto"
        />

        <div className="mt-4 divide-y divide-black/[0.08] rounded-[1.5rem] border border-black/[0.06] bg-white">
          {faqs.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen((v) => (v === i ? null : i))}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              >
                <span className="flex items-start gap-3">
                  <span className="mt-1 font-mono text-xs text-neutral-400">{i + 1}</span>
                  <span className="font-medium text-neutral-900">{item.q}</span>
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-neutral-400 transition-transform",
                    open === i ? "rotate-180" : ""
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-black/[0.05] px-5 pb-5 pl-[3.35rem] pr-6 text-sm leading-relaxed text-neutral-600 md:px-6 md:pb-6">
                      {item.a}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
