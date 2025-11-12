import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ExploreSection() {
  return (
    <section className="container mx-auto px-4 pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">A little about my life</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, nunc id finibus
            dictum, sem eros iaculis sem, eget feugiat nibh urna non elit. Suspendisse potenti. Cras
            feugiat, augue non semper efficitur, turpis sem viverra lorem, vel pulvinar tortor nibh in
            nisl.
          </p>
          <p className="text-muted-foreground">
            Curabitur id dapibus dui. Proin molestie, est eget vehicula sodales, odio nibh placerat
            felis, eu commodo libero sem et urna. Vivamus ac nisl vitae nulla tristique suscipit.
          </p>
          {/* Photos grid placeholder (intentionally omitted per request) */}
        </div>

        <div className="md:justify-self-end">
          <Card className="group hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 text-center">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
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
              </div>
              <h3 className="text-xl font-bold mb-3">My Writings</h3>
              <p className="text-muted-foreground mb-6">Thoughts and reflections</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/writings">Read Writings</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
