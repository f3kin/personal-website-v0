"use client"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  alignment?: "left" | "center"
}

export default function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  return (
    <div className={`space-y-2 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>

      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </div>
  )
}
