"use client"

import { Satellite } from "lucide-react"
import { personal } from "@/lib/personal"

/** Four primary links — mirrors the reference layout (Work / About / Playground / Resource). */
const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#research", label: "Research" },
]

export function ConicornNavbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className="flex w-full max-w-4xl items-center gap-3 rounded-full bg-[#1A1A1A] px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.08)] md:gap-8 md:px-5 md:py-3"
        aria-label="Main"
      >
        <a
          href="#top"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1A1A1A] transition-colors hover:bg-neutral-100"
          aria-label="Back to top"
        >
          <Satellite className="h-[20px] w-[20px]" strokeWidth={1.75} />
        </a>

        <ul className="flex min-w-0 flex-1 items-center justify-center gap-4 overflow-x-auto py-1 [scrollbar-width:none] md:gap-8 lg:gap-10 [&::-webkit-scrollbar]:hidden">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="whitespace-nowrap text-sm font-medium text-white/95 transition-opacity hover:opacity-80"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Open résumé (Google Drive)"
          className="shrink-0 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-neutral-100 sm:px-6"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
