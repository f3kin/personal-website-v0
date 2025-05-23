import Link from "next/link"
import SectionHeading from "@/components/shared/section-heading"
import ProjectCard from "@/components/projects/project-card"
import { Button } from "@/components/ui/button"

// Sample featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
    link: "/projects/e-commerce-dashboard",
    github: "https://github.com/johndoe/e-commerce-dashboard",
  },
  {
    id: 2,
    title: "Travel Blog Platform",
    description:
      "A platform for travel enthusiasts to share their experiences, with rich media support and interactive maps.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Mapbox"],
    link: "/projects/travel-blog",
    github: "https://github.com/johndoe/travel-blog",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "An AI-powered tool that helps content creators generate ideas, outlines, and drafts for various types of content.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "OpenAI", "Tailwind CSS", "TypeScript"],
    link: "/projects/ai-content-generator",
    github: "https://github.com/johndoe/ai-content-generator",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </section>
  )
}
