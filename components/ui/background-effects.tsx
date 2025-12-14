"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type MousePosition = { x: number; y: number }

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0.5, y: 0.5 })
  const [amplitude, setAmplitude] = useState<number>(1)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    const updateAmplitude = () => {
      // Reduce motion amplitude on small screens
      setAmplitude(window.innerWidth < 640 ? 0.3 : 1)
    }
    updateAmplitude()
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", updateAmplitude)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", updateAmplitude)
    }
  }, [])

  return (
    <div className="fixed inset-0 h-dvh w-screen overflow-hidden -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
      {/* Interactive gradient blobs with mobile-safe amplitudes */}
      <motion.div
        className="absolute -top-10 left-1/4 w-[45rem] h-[45rem] bg-primary/15 rounded-full blur-3xl opacity-60"
        animate={{
          x: (mousePosition.x * 30 - 15) * amplitude,
          y: (mousePosition.y * 30 - 15) * amplitude,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      />
      <motion.div
        className="absolute top-1/3 -right-10 w-[38rem] h-[38rem] bg-secondary/20 rounded-full blur-3xl opacity-70"
        animate={{
          x: (-mousePosition.x * 25 + 12) * amplitude,
          y: (-mousePosition.y * 25 + 12) * amplitude,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-3xl opacity-50"
        animate={{
          x: (mousePosition.x * 20 - 10) * amplitude,
          y: (mousePosition.y * 20 - 10) * amplitude,
        }}
        transition={{ type: "spring", damping: 60, stiffness: 80 }}
      />
    </div>
  )
}

