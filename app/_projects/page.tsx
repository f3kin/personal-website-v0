import SectionHeading from "@/components/shared/section-heading"
import ProjectGrid from "@/components/_projects/project-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Finlay Ekins",
  description: "Explore my projects, creations, and things I've built.",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading title="My Projects" subtitle="Things I've built, created, and experimented with" />

      <div className="mt-12">
        <ProjectGrid />
      </div>
    </div>
  )
}
