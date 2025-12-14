"use client"

import { useState } from "react"
import WritingCard from "./writing-card"
import { Input } from "@/components/ui/input"
import type { MediumPost } from "@/lib/medium"

interface WritingListProps {
  initialPosts: MediumPost[]
}

export default function WritingList({ initialPosts }: WritingListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  let filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  // Keep original order from the feed; no category or sort controls

  return (
    <div>
      {/* Search */}
      <div className="mb-8 space-y-4">
        <div className="flex">
          <Input
            type="text"
            placeholder="i'm looking for..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
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
