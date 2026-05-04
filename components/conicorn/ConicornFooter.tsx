"use client"

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react"
import { personal } from "@/lib/personal"
import { footerCta } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"

type Props = {
  onContact: () => void
}

export function ConicornFooter({ onContact }: Props) {
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <h2 className="font-display max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-balance md:text-5xl lg:text-[3.15rem]">
          {footerCta.line1}{" "}
          <span className="block text-white/38 md:inline md:pl-3">
            {footerCta.line2Muted}
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          {footerCta.sub}
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onContact}
            className={cn(
              "inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 transition-colors hover:bg-neutral-200"
            )}
          >
            {footerCta.cta}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <a
            href={`mailto:${personal.email}`}
            className="text-sm font-medium text-white/60 underline-offset-4 transition-colors hover:text-white"
          >
            {personal.email}
          </a>
        </div>

        <div className="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
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
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/[0.1]"
              >
                <Icon className="h-4 w-4 opacity-70" />
                {label}
              </a>
            ))}
          </div>
          <p className="font-mono text-[11px] text-white/35">
            {personal.location} · {personal.timezone}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#stack" className="hover:text-white">
              Stack
            </a>
            <a href="#faq" className="hover:text-white">
              FAQs
            </a>
          </nav>
          <p>
            © {new Date().getFullYear()} {personal.name} · Inspired by{' '}
            <a
              href="https://conicorn.webflow.io/"
              className="underline underline-offset-2 hover:text-white/70"
              target="_blank"
              rel="noreferrer"
            >
              Conicorn
            </a>{" "}
            (NinhStudio)
          </p>
        </div>
      </div>
    </footer>
  )
}
