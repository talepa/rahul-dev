"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setP(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-neutral-200/70"
      aria-hidden
    >
      <div
        className="h-full bg-orange-500 transition-[width] duration-150 ease-out"
        style={{ width: `${Math.min(100, p * 100)}%` }}
      />
    </div>
  )
}
