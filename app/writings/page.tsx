import SectionHeading from "@/components/shared/section-heading"
import WritingList from "@/components/writings/writing-list"
import type { Metadata } from "next"
import { getMediumPosts } from "@/lib/medium"

export const metadata: Metadata = {
  title: "Writings | Finlay Ekins",
}

// Revalidate the page every hour (3600 seconds)
export const revalidate = 36000

export default async function WritingsPage() {
  const posts = await getMediumPosts("finlayekins")

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading title="My Writings" />

      <div className="mt-12">
        <WritingList initialPosts={posts} />
      </div>
    </div>
  )
}
