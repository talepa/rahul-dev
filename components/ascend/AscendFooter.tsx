"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { personal } from "@/lib/personal"
import { footerCta } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"
import { ascendBtnSolid } from "./ascend-styles"

type Props = {
  onContact: () => void
}

export function AscendFooter({ onContact }: Props) {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/[0.06] bg-[#020203] pb-24 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-ascend max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-5xl">
          {footerCta.line1}{" "}
          <span className="bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">{footerCta.line2Muted}</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">{footerCta.sub}</p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <button type="button" onClick={onContact} className={ascendBtnSolid("gap-2")}>
            {footerCta.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
          <a href={`mailto:${personal.email}`} className="text-sm font-medium text-zinc-400 underline-offset-4 hover:text-white hover:underline">
            {personal.email}
          </a>
        </div>

        <div className="mt-20 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] px-8 py-10 backdrop-blur-sm md:px-10 md:py-12">
          <p className="font-ascend text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Speak to Rahul directly.
          </p>
          <p className="mt-5 max-w-xl text-zinc-400">
            Mention your stack — semantic search, RAG, dashboards, or hiring timelines — I’ll reply tactically.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { href: `mailto:${personal.email}`, Icon: Mail, label: "Email" },
              { href: personal.linkedinUrl, Icon: Linkedin, label: "LinkedIn", ext: true },
              { href: personal.githubUrl, Icon: Github, label: "GitHub", ext: true },
            ].map(({ href, Icon, label, ext }) => (
              <a
                key={label}
                href={href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noreferrer" : undefined}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-white/30 hover:bg-white/[0.05]"
                )}
              >
                <Icon className="h-4 w-4 opacity-70" aria-hidden />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/[0.07] pt-10 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              ["#about", "About"],
              ["#experience", "Experience"],
              ["#work", "Work"],
              ["#research", "Research"],
              ["#faq", "FAQ"],
            ].map(([href, lab]) => (
              <a key={href} href={href} className="transition hover:text-white">
                {lab}
              </a>
            ))}
          </nav>
          <p className="font-mono text-[11px]">
            Mumbai · IST · Adapted UI inspired by{' '}
            <a href="https://ascendmarketing.xyz/" className="text-zinc-400 underline underline-offset-2 hover:text-white" target="_blank" rel="noreferrer">
              Ascend Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
