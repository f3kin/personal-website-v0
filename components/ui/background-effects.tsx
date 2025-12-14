"use client"

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 h-dvh w-screen overflow-hidden -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
      {/* Static blurred blobs (no animation) */}
      <div className="absolute -top-10 left-1/4 w-[45rem] h-[45rem] bg-primary/15 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/3 -right-10 w-[38rem] h-[38rem] bg-secondary/20 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-1/3 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-3xl opacity-50" />
    </div>
  )
}

