import SectionHeading from "@/components/shared/section-heading"
import WritingList from "@/components/writings/writing-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writings | Finlay Ekins",
  description: "My thoughts, reflections, and stories from everyday life.",
}

export default function WritingsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading title="My Writings" subtitle="Thoughts, reflections, and stories from everyday life" />

      <div className="mt-12">
        <WritingList />
      </div>
    </div>
  )
}
