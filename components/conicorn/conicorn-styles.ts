import { cn } from "@/lib/utils"

/** Conicorn-style primary CTA — black pill, tight uppercase tracking */
export function btnPrimary(className?: string) {
  return cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_14px_40px_rgba(0,0,0,0.14)] transition-all hover:bg-[#1f1f1f] hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)] active:scale-[0.98]",
    className
  )
}

/** Outlined pill — secondary actions */
export function btnSecondary(className?: string) {
  return cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-800 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-50 active:scale-[0.98]",
    className
  )
}

/** Page + section shells (warm neutrals aligned with Webflow SaaS templates) */
export const pageBg = "bg-[#FDFCF9]"
export const sectionSurface = "bg-[#FDFCF9]"
export const sectionMuted = "bg-[#EDEAE4]"
