import { cn } from "@/lib/utils"

/** Federico Pian–inspired neutrals: near-black field, warm gray type, crisp dividers */
export const fede = {
  bg: "#0a0a0a",
  surface: "#111111",
  border: "#262626",
  fg: "#fafaf9",
  muted: "#a3a3a3",
  dim: "#737373",
} as const

export function fedeLink(className?: string) {
  return cn(
    "text-[#fafaf9]/90 underline-offset-4 decoration-neutral-600 hover:decoration-neutral-400 transition-colors",
    className
  )
}

export function fedeVisitArrow(className?: string) {
  return cn(
    "inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#fafaf9]",
    className
  )
}
