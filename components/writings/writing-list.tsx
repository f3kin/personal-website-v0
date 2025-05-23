"use client"

import { useState } from "react"
import WritingCard from "./writing-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample writing posts data
const allPosts = [
  {
    id: 1,
    title: "Finding Peace in Everyday Moments",
    excerpt: "Reflections on how I've learned to appreciate the small, quiet moments that make life beautiful.",
    date: "2023-05-15",
    readTime: "5 min read",
    slug: "finding-peace-everyday-moments",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mindfulness",
  },
  {
    id: 2,
    title: "The Books That Changed My Perspective",
    excerpt: "A look at the five books that fundamentally altered how I see the world and myself.",
    date: "2023-04-22",
    readTime: "8 min read",
    slug: "books-changed-perspective",
    image: "/placeholder.svg?height=400&width=600",
    category: "Books",
  },
  {
    id: 3,
    title: "What I Learned From a Digital Detox",
    excerpt: "My experience disconnecting from technology for two weeks and what it taught me about connection.",
    date: "2023-03-10",
    readTime: "6 min read",
    slug: "digital-detox-lessons",
    image: "/placeholder.svg?height=400&width=600",
    category: "Wellness",
  },
  {
    id: 4,
    title: "On Friendship in Adulthood",
    excerpt: "Thoughts on how friendships evolve as we age and the importance of nurturing meaningful connections.",
    date: "2023-02-18",
    readTime: "7 min read",
    slug: "friendship-adulthood",
    image: "/placeholder.svg?height=400&width=600",
    category: "Relationships",
  },
  {
    id: 5,
    title: "Lessons From My First Year of Meditation",
    excerpt: "What a year of consistent meditation practice has taught me about my mind and emotions.",
    date: "2023-01-25",
    readTime: "9 min read",
    slug: "meditation-first-year",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mindfulness",
  },
  {
    id: 6,
    title: "The Joy of Cooking for Others",
    excerpt: "How preparing meals for friends and loved ones became one of my favorite ways to express care.",
    date: "2022-12-05",
    readTime: "4 min read",
    slug: "joy-cooking-others",
    image: "/placeholder.svg?height=400&width=600",
    category: "Food",
  },
  {
    id: 7,
    title: "What Travel Has Taught Me About Humanity",
    excerpt: "Reflections on the universal aspects of human experience I've observed while traveling.",
    date: "2022-11-14",
    readTime: "10 min read",
    slug: "travel-lessons-humanity",
    image: "/placeholder.svg?height=400&width=600",
    category: "Travel",
  },
  {
    id: 8,
    title: "Finding My Creative Voice",
    excerpt: "My journey of creative exploration and learning to express myself authentically.",
    date: "2022-10-22",
    readTime: "6 min read",
    slug: "finding-creative-voice",
    image: "/placeholder.svg?height=400&width=600",
    category: "Creativity",
  },
  {
    id: 9,
    title: "The Power of Morning Rituals",
    excerpt: "How establishing a meaningful morning routine transformed my days and overall wellbeing.",
    date: "2022-09-08",
    readTime: "5 min read",
    slug: "morning-rituals-power",
    image: "/placeholder.svg?height=400&width=600",
    category: "Wellness",
  },
]

// Extract all unique categories
const categories = Array.from(new Set(allPosts.map((post) => post.category)))

export default function WritingList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("newest")

  // Filter and sort posts
  let filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Sort posts
  filteredPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()

    if (sortBy === "newest") {
      return dateB - dateA
    } else if (sortBy === "oldest") {
      return dateA - dateB
    } else {
      return 0
    }
  })

  return (
    <div>
      {/* Search, filter, and sort */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="text"
            placeholder="Search writings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />

          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Writing posts grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <WritingCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No writings found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  )
}
