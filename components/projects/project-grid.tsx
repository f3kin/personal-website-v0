"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample projects data
const allProjects = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "A clean, modern personal website built with Next.js and Tailwind CSS to showcase my work and thoughts.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "/",
    github: "https://github.com/alexchen/personal-website",
    status: "completed" as const,
  },
  {
    id: 2,
    title: "Reading Tracker App",
    description: "A mobile app to track reading progress, set goals, and discover new books with friends.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "TypeScript"],
    github: "https://github.com/alexchen/reading-tracker",
    status: "in-progress" as const,
  },
  {
    id: 3,
    title: "Minimalist Todo App",
    description: "A simple, distraction-free todo application focused on helping users stay productive.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Local Storage", "CSS"],
    link: "https://todo.alexchen.me",
    github: "https://github.com/alexchen/minimalist-todo",
    status: "completed" as const,
  },
  {
    id: 4,
    title: "Photography Portfolio",
    description: "A gallery website to showcase my photography work with a focus on street photography and landscapes.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["HTML", "CSS", "JavaScript", "Lightbox"],
    link: "https://photos.alexchen.me",
    status: "completed" as const,
  },
  {
    id: 5,
    title: "Meditation Timer",
    description: "A web-based meditation timer with ambient sounds and progress tracking for mindfulness practice.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Web Audio API", "PWA"],
    link: "https://meditate.alexchen.me",
    github: "https://github.com/alexchen/meditation-timer",
    status: "completed" as const,
  },
  {
    id: 6,
    title: "Local Coffee Shop Finder",
    description:
      "An app concept to help people discover independent coffee shops in their area with reviews and photos.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Maps API", "User Reviews"],
    status: "concept" as const,
  },
]

// Extract all unique tags from projects
const allTags = Array.from(new Set(allProjects.flatMap((project) => project.tags)))

export default function ProjectGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // Filter projects based on search query, selected tags, and status
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag))

    const matchesStatus = statusFilter === "all" || project.status === statusFilter

    return matchesSearch && matchesTags && matchesStatus
  })

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div>
      {/* Search and filter */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="concept">Concept</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}

          {selectedTags.length > 0 && (
            <Button variant="ghost" size="sm" onClick={() => setSelectedTags([])} className="text-xs">
              Clear filters
            </Button>
          )}
        </div>
      </div>

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  )
}
