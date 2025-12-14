"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

interface WritingPost {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
  image: string
  category?: string
}

interface WritingCardProps {
  post: WritingPost
}

export default function WritingCard({ post }: WritingCardProps) {
  const [loaded, setLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>(post.image || "/placeholder.svg")

  const isExternal = /^https?:\/\//i.test(imageSrc)

  return (
    <div>
      <Link href={`${post.slug}`} target="_blank">
        <Card className="overflow-hidden h-full flex flex-col transition-shadow duration-300 hover:shadow-lg group">
          <div className="relative aspect-video overflow-hidden bg-muted/40">
            {/* Fade-in image to prevent white flash */}
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized={isExternal}
              referrerPolicy="no-referrer"
              onLoad={() => setLoaded(true)}
              onError={() => setImageSrc("/placeholder.jpg")}
              className={`object-cover transition-opacity duration-300 ease-out will-change-opacity group-hover:scale-[1.02] ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <CardContent className="flex flex-col flex-grow p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>

            <p className="text-muted-foreground">{post.excerpt}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
