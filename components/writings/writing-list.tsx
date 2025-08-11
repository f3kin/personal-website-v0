"use client"

import { useState } from "react"
import WritingCard from "./writing-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample writing posts data
const allPosts = [
  {
    id: 1,
    title: "How to Make Decisions",
    excerpt: "What I've learnt about decision-making in developing an action-bias",
    date: "2025-01-30",
    readTime: "5 min read",
    slug: "https://medium.com/@f3kin/how-to-make-decisions-b658d9777984",
    image: "/images/writings/decision-making.jpg",
    category: "Self-Improvement",
  },
  {
    id: 2,
    title: "How I architect my life",
    excerpt: "How I avoid perfectionism and achieve my goals",
    date: "2025-01-07",
    readTime: "8 min read",
    slug: "https://medium.com/@f3kin/how-steve-jobs-and-notion-are-shaping-my-2025-goals-277826aa2bc3",
    image: "/images/writings/steve-jobs.jpg",
    category: "Books",
  }
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
