"use client"

import dynamic from "next/dynamic"

const AscendParticleField = dynamic(() => import("./AscendParticleField"), {
  ssr: false,
  loading: () => <div className="h-full min-h-screen w-full bg-transparent" aria-hidden />,
})

export function AscendBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#030304]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-10%,rgba(109,40,217,0.42),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_90%,rgba(6,182,212,0.08),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.45] grayscale-[20%]">
        <AscendParticleField />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.04%22/%3E%3C/svg%3E')] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030304]/20 via-transparent to-[#030304]" />
    </div>
  )
}
