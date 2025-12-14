"use client"
import Hero from "@/components/home/hero"
import ExploreSection from "@/components/home/explore-section"
import PageContent from "@/components/layout/page-content"

export default function Home() {
  return (
    <>
      <PageContent>
        <Hero />
        <ExploreSection />
      </PageContent>
    </>
  )
}

