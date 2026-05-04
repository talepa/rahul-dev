import { AscendSection } from "./AscendSection"
import { AscendWorkTimeline } from "./AscendWorkTimeline"

export function AscendExperience() {
  return (
    <AscendSection
      id="experience"
      kicker="// Experience"
      title="Roles where semantic search and data science shipped together."
      subtitle="AI Engineer Intern at Stuvio Digital and Data Science Intern at Cyber3ra — production-minded work you can trace in code and dashboards."
    >
      <AscendWorkTimeline />
    </AscendSection>
  )
}
