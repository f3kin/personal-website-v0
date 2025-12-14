"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type MousePosition = { x: number; y: number }

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

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

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
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
    </div>
  )
}

