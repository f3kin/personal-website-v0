"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  image: string
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={`/writing/${post.slug}`}>
        <Card
          className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
            />
          </div>

          <CardContent className="flex flex-col flex-grow p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>

            <p className="text-muted-foreground">{post.excerpt}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
