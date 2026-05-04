"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { faqs } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"
import { AscendSection } from "./AscendSection"

export function AscendFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <AscendSection
      id="faq"
      kicker="// FAQ"
      title="Straight answers recruiters ask first."
      subtitle="Remote-friendly, IST-based collaboration, tools I use daily, and what I'm optimizing for next."
    >
      <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
        <div className="divide-y divide-white/[0.08] rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
          {faqs.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen((v) => (v === i ? null : i))}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              >
                <span className="flex items-start gap-3">
                  <span className="mt-1 font-mono text-xs text-zinc-500">{i + 1}</span>
                  <span className="font-medium text-white">{item.q}</span>
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-zinc-500 transition-transform",
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
                    <p className="border-t border-white/[0.06] px-5 pb-5 pl-[3.35rem] pr-6 text-sm leading-relaxed text-zinc-400 md:px-6 md:pb-6">
                      {item.a}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </AscendSection>
  )
}
