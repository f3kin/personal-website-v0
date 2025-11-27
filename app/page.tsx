"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/home/hero"
import ExploreSection from "@/components/home/explore-section"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  const lastUpdated = new Date().toISOString().split("T")[0]

  return (
    <>
      {/* Full-page gradient background that extends behind the header */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Base gradient layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-background"></div>

        {/* Interactive gradient blobs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-primary/15 rounded-full filter blur-3xl opacity-60"
          animate={{
            x: mousePosition.x * 30 - 15,
            y: mousePosition.y * 30 - 15,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[40rem] h-[40rem] bg-secondary/20 rounded-full filter blur-3xl opacity-70"
          animate={{
            x: -mousePosition.x * 25 + 12,
            y: -mousePosition.y * 25 + 12,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[35rem] h-[35rem] bg-primary/10 rounded-full filter blur-3xl opacity-50"
          animate={{
            x: mousePosition.x * 20 - 10,
            y: mousePosition.y * 20 - 10,
          }}
          transition={{ type: "spring", damping: 60, stiffness: 80 }}
        />

        {/* Animated particles */}
        <Particles />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 sm:gap-8 md:gap-10 pb-8">
        <Hero />
        <ExploreSection />
      </div>
    </>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: `${Math.random() * 100}vh`,
            x: `${Math.random() * 100}vw`,
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 30 + 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
