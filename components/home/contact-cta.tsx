import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-primary/10 rounded-3xl p-8 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  )
}
