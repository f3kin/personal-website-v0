import Link from "next/link"

export default function ExploreSection() {
  return (
    <section className="container mx-auto px-4 pt-4 pb-6">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I love reading books and writing about my experiences.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I spend my time running Hourglass Digital, an AI consultancy.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I'm a big fan of surfing, basketball, and philosophy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
