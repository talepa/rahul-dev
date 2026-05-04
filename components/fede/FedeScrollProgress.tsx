"use client"

import { useEffect, useState } from "react"

export function FedeScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      const next = height > 0 ? Math.round((scrollTop / height) * 100) : 0
      setPct(next)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed right-4 top-4 z-[120] font-mono text-[11px] font-medium tabular-nums text-neutral-500 md:right-6 md:top-5"
      aria-live="polite"
      aria-label={`Scroll progress ${pct} percent`}
    >
      {pct}%
    </div>
  )
}
