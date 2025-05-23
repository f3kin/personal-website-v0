"use client"

import { useState } from "react"
import BlogCard from "./blog-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample blog posts data
const allPosts = [
  {
    id: 1,
    title: "Building Accessible React Applications",
    excerpt:
      "Learn how to create React applications that are accessible to all users, including those with disabilities.",
    date: "2023-05-15",
    readTime: "8 min read",
    slug: "building-accessible-react-applications",
    image: "/placeholder.svg?height=400&width=600",
    category: "Accessibility",
  },
  {
    id: 2,
    title: "The Power of Server Components in Next.js",
    excerpt: "Explore how Server Components in Next.js can improve performance and developer experience.",
    date: "2023-04-22",
    readTime: "6 min read",
    slug: "power-of-server-components-nextjs",
    image: "/placeholder.svg?height=400&width=600",
    category: "Next.js",
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt: "Advanced techniques and best practices for using Tailwind CSS in your projects.",
    date: "2023-03-10",
    readTime: "10 min read",
    slug: "mastering-tailwind-css-tips-tricks",
    image: "/placeholder.svg?height=400&width=600",
    category: "CSS",
  },
  {
    id: 4,
    title: "State Management in React: Context API vs. Redux",
    excerpt: "A comparison of different state management approaches in React applications.",
    date: "2023-02-18",
    readTime: "12 min read",
    slug: "state-management-react-context-redux",
    image: "/placeholder.svg?height=400&width=600",
    category: "React",
  },
  {
    id: 5,
    title: "Building a REST API with Node.js and Express",
    excerpt: "A step-by-step guide to creating a RESTful API using Node.js and Express.",
    date: "2023-01-25",
    readTime: "15 min read",
    slug: "building-rest-api-nodejs-express",
    image: "/placeholder.svg?height=400&width=600",
    category: "Backend",
  },
  {
    id: 6,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt: "Learn the basics of TypeScript and how it can improve your JavaScript development workflow.",
    date: "2022-12-05",
    readTime: "9 min read",
    slug: "introduction-typescript-javascript-developers",
    image: "/placeholder.svg?height=400&width=600",
    category: "TypeScript",
  },
]

// Extract all unique categories
const categories = Array.from(new Set(allPosts.map((post) => post.category)))

export default function BlogList() {
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
            placeholder="Search articles..."
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

      {/* Blog posts grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  )
}
