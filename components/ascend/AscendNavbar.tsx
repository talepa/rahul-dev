"use client"

import { personal } from "@/lib/personal"

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
]

export function AscendNavbar() {
  const brand = `${personal.nameFirst}.`

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] border-b border-white/[0.06] bg-[#030304]/55 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:gap-8 md:px-8">
        <a href="#top" className="font-ascend text-lg font-semibold tracking-tight text-white md:text-xl">
          {brand}
        </a>

        <nav
          aria-label="Primary"
          className="-mx-2 flex min-w-0 justify-center gap-5 overflow-x-auto px-2 [scrollbar-width:none] md:justify-center md:gap-9 [&::-webkit-scrollbar]:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 text-[13px] font-medium text-zinc-400 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-white/20 px-5 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-white/50 hover:bg-white/[0.06]"
        >
          Résumé
        </a>
      </div>
    </header>
  )
}
