import SectionHeading from "@/components/shared/section-heading"
import WritingList from "@/components/writings/writing-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writings | Finlay Ekins",
  description: "Thoughts and reflections from my life.",
}

export default function WritingsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading title="My Writings" subtitle="Thoughts and reflections from life" />

      <div className="mt-12">
        <WritingList />
      </div>
    </div>
  )
}
