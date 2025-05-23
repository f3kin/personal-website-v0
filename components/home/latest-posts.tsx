import Link from "next/link"
import SectionHeading from "@/components/shared/section-heading"
import BlogCard from "@/components/writing/blog-card"
import { Button } from "@/components/ui/button"

// Sample blog posts data
const latestPosts = [
  {
    id: 1,
    title: "Building Accessible React Applications",
    excerpt:
      "Learn how to create React applications that are accessible to all users, including those with disabilities.",
    date: "2023-05-15",
    readTime: "8 min read",
    slug: "building-accessible-react-applications",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "The Power of Server Components in Next.js",
    excerpt: "Explore how Server Components in Next.js can improve performance and developer experience.",
    date: "2023-04-22",
    readTime: "6 min read",
    slug: "power-of-server-components-nextjs",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt: "Advanced techniques and best practices for using Tailwind CSS in your projects.",
    date: "2023-03-10",
    readTime: "10 min read",
    slug: "mastering-tailwind-css-tips-tricks",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function LatestPosts() {
  return (
    <section className="container mx-auto px-4 py-16 bg-muted/50">
      <SectionHeading title="Latest Articles" subtitle="Thoughts, tutorials, and insights" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {latestPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/writing">Read All Articles</Link>
        </Button>
      </div>
    </section>
  )
}
