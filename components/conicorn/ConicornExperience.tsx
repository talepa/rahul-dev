"use client"

import { SectionHeader } from "./SectionHeader"
import { ConicornWorkTimeline } from "./ConicornWorkTimeline"
import { sectionMuted } from "./conicorn-styles"

export function ConicornExperience() {
  return (
    <section id="experience" className={sectionMuted}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          number="004"
          kicker="experience"
          title="Where I've shipped impact"
          subtitle="AI Engineer Intern at Stuvio Digital and Data Science Intern at Cyber3ra — semantic search, embeddings, RAG, and rigorous EDA you can trace back to shipped work."
        />
        <ConicornWorkTimeline />
      </div>
    </section>
  )
}
