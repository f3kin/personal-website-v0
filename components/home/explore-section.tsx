import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/shared/section-heading"

const exploreItems = [
  {
    title: "About Me",
    description: "My journey",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    href: "/about",
    buttonText: "Learn More",
  },
  {
    title: "My Projects",
    description: "Things I've built and created",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-folder"
      >
        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
      </svg>
    ),
    href: "/projects",
    buttonText: "View Projects",
  },
  {
    title: "My Writings",
    description: "Thoughts and reflections",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-pen-tool"
      >
        <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
        <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
        <path d="m2.3 2.3 7.286 7.286"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    href: "/writings",
    buttonText: "Read Writings",
  },
]

export default function ExploreSection() {
  return (
    <section className="container mx-auto px-4 pt-8 pb-16">
      <SectionHeading title="Explore" subtitle="Discover different aspects of my world" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {exploreItems.map((item, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50"
          >
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground mb-6">{item.description}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href={item.href}>{item.buttonText}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
