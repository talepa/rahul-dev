"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github } from "lucide-react"
import { personal } from "@/lib/personal"
import { heroContent } from "@/lib/portfolio-content"
import { btnPrimary, btnSecondary, pageBg } from "./conicorn-styles"

type Props = {
  onContact: () => void
}

const trustStrip = ["Python", "RAG", "scikit-learn", "OpenAI APIs", "SQL", "Docker", "Power BI"]

export function ConicornHero({ onContact }: Props) {
  return (
    <section
      id="top"
      className={`relative overflow-hidden ${pageBg} px-4 pb-16 pt-24 md:pb-24 md:pt-28 lg:px-8`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,0,0,0.035),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_60%,rgba(17,17,17,0.025),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-600 shadow-sm"
          >
            {heroContent.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-neutral-900 text-balance sm:text-5xl md:text-6xl lg:text-[3.5rem]"
          >
            {heroContent.headlineLine1}{" "}
            <span className="block text-neutral-400 md:inline md:pl-2">
              {heroContent.headlineLine2.trim()}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-[1.65] text-neutral-600 md:text-lg"
          >
            {heroContent.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={onContact} className={btnPrimary()}>
                {heroContent.primaryCta}
              </button>
              <span className="flex -space-x-2">
                <span className="relative z-[1] h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-lg ring-2 ring-[#111]">
                  <Image
                    src={personal.profileImageUrl}
                    alt=""
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="relative z-0 h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-lg ring-2 ring-[#111]">
                  <Image
                    src={personal.profileImageUrl}
                    alt=""
                    width={44}
                    height={44}
                    className="h-full w-full object-cover object-top opacity-[0.92]"
                  />
                </span>
              </span>
            </div>

            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={btnSecondary("gap-2 normal-case tracking-normal !text-[13px]")}
            >
              <Github className="h-4 w-4" />
              {heroContent.secondaryCta}
              <ArrowRight className="h-4 w-4 opacity-50" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="mt-5"
          >
            <div className="inline-flex rounded-2xl border border-neutral-200 bg-white px-4 py-2.5 text-xs shadow-sm">
              <span className="font-medium text-neutral-800">Collaboration & hiring</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-14 border-t border-neutral-200/80 pt-8"
          >
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Stack spotlight
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {trustStrip.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500">
              <a
                href={`mailto:${personal.email}`}
                className="font-medium underline decoration-neutral-300 underline-offset-4 hover:text-neutral-800"
              >
                {personal.email}
              </a>
              <span className="hidden sm:inline opacity-40">·</span>
              <span>{personal.phone}</span>
              <span className="hidden sm:inline opacity-40">·</span>
              <span>{personal.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
