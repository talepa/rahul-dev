"use client"

import { personal } from "@/lib/personal"

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
]

export function FedeNavbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[110] px-4 pt-5 md:px-8 md:pt-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-[13px] text-neutral-400 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
          {personal.locationShort.replace(/\s+/g, " ")} · {personal.timezone}
        </p>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-neutral-300 transition-colors hover:text-[#fafaf9]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-700 bg-[#141414] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#fafaf9] transition-colors hover:border-neutral-500"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  )
}
