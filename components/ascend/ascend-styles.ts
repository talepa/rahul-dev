import { cn } from "@/lib/utils"

/** Solid pill — Ascend-style primary CTA */
export function ascendBtnSolid(className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-full bg-white px-9 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 transition hover:bg-zinc-200 active:scale-[0.98]",
    className
  )
}

/** Outline / ghost — secondary CTA */
export function ascendBtnGhost(className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.04] px-9 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:border-white/45 hover:bg-white/[0.08] active:scale-[0.98]",
    className
  )
}
