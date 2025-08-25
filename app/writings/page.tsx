import SectionHeading from "@/components/shared/section-heading"
import WritingList from "@/components/writings/writing-list"
import type { Metadata } from "next"
import { getMediumPosts } from "@/lib/medium"

export const metadata: Metadata = {
  title: "Writings | Finlay Ekins",
  description: "Thoughts and reflections from my life.",
}

// Revalidate the page every hour (3600 seconds)
export const revalidate = 36000

export default async function WritingsPage() {
  const posts = await getMediumPosts("f3kin")

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading title="My Writings" subtitle="Thoughts and reflections from life" />

      <div className="mt-12">
        <WritingList initialPosts={posts} />
      </div>
    </div>
  )
}
