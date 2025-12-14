"use client"
import Hero from "@/components/home/hero"
import ExploreSection from "@/components/home/explore-section"
import BackgroundEffects from "@/components/ui/background-effects"
import PageContent from "@/components/layout/page-content"

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <PageContent>
        <Hero />
        <ExploreSection />
      </PageContent>
    </>
  )
}

