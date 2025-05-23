"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { link } from "fs"

// Sample projects data
const allProjects = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "A clean, modern personal website built with Next.js and Tailwind CSS to showcase my work and thoughts.",
    image: "/images/projects/personal-website.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "/",
    github: "https://github.com/f3kin/personal-website-v0",
    status: "completed" as const,
  },
  {
    id: 2,
    title: "Zero AI",
    description: "Course planning software for University of Melbourne students, used by 1000+ students",
    image: "/images/projects/zero-ai.jpg",
    tags: ["React", "Firebase", "OpenAI RAG"],
    link: "https://zero-ai.streamlit.app/",
    status: "completed" as const,
  },
  {
    id: 3,
    title: "The ActiveMate App",
    description: "A personalised running coaching app for runners of all abilities",
    image: "/images/projects/activemate-app.jpeg",
    tags: ["React Native", "Flask", "Firebase"],
    link: "https://www.activemate.com.au/",
    status: "completed" as const,
  },
  {
    id: 4,
    title: "WoofBand",
    description: "I receieved a $1000 grant to build a biometric dog collar to track a dog's health",
    image: "/images/projects/woofband.jpg",
    tags: ["PlatformIO", "C++", "ESP32"],
    link: "https://github.com/f3kin/WoofBand",
    github: "https://github.com/f3kin/woof-band-firmware",
    status: "completed" as const,
  },
    {
    id: 5,
    title: "MapScraper",
    description: "I built a google maps lead generator for a small business",
    image: "/images/projects/mapscraper.jpg",
    tags: ["React", "Places API", "JavaScript", "FastAPI"],
    link: "https://mapscraper-frontend.vercel.app/",
    status: "completed" as const,
  }
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
