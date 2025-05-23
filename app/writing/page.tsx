import SectionHeading from "@/components/shared/section-heading"
import BlogList from "@/components/writing/blog-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writing | John Doe",
  description: "Articles, tutorials and thoughts on web development, design, and technology.",
}

export default function WritingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading title="My Writing" subtitle="Articles, tutorials and thoughts on web development" />

      <div className="mt-12">
        <BlogList />
      </div>
    </div>
  )
}
