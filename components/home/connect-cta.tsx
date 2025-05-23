import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ConnectCTA() {
  return (
    <section className="container mx-auto px-8 md:px-16 py-24">
      <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-12 md:p-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          I love meeting new people and hearing different perspectives. Whether you want to share your own experiences
          or just say hello, I'd love to hear from you.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/connect">Say Hello</Link>
        </Button>
      </div>
    </section>
  )
}
