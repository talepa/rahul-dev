"use client"

import { personal } from "@/lib/personal"
import { fedeLink } from "./fede-theme"

type Props = {
  onContact: () => void
}

export function FedeFooter({ onContact }: Props) {
  return (
    <footer id="contact" className="border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-600">Contact</p>
        <p className="mt-8 max-w-xl font-display text-3xl font-medium leading-tight text-[#fafaf9] md:text-4xl">
          Let&apos;s build retrieval and ML systems that ship.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-neutral-500">
          <a href={`mailto:${personal.email}`} className={fedeLink("text-neutral-400")}>
            {personal.email}
          </a>
          <span>{personal.phone}</span>
          <a href={personal.githubUrl} target="_blank" rel="noreferrer" className={fedeLink("text-neutral-400")}>
            GitHub
          </a>
          <a href={personal.linkedinUrl} target="_blank" rel="noreferrer" className={fedeLink("text-neutral-400")}>
            LinkedIn
          </a>
        </div>
        <button
          type="button"
          onClick={onContact}
          className="mt-12 rounded-full border border-neutral-700 px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fafaf9] transition-colors hover:border-neutral-500"
        >
          Open contact card
        </button>
        <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-700">
          {personal.name.toLowerCase().replace(/\s+/g, "")} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
