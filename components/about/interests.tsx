"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Interest categories and their details
const interestCategories = {
  creative: [
    {
      name: "Photography",
      description: "Capturing moments and perspectives through my lens, primarily street photography and landscapes.",
    },
    {
      name: "Writing",
      description: "Journaling, creative writing, and occasionally poetry to process thoughts and experiences.",
    },
    {
      name: "Cooking",
      description: "Experimenting with flavors from around the world and hosting dinner parties for friends.",
    },
    {
      name: "Music",
      description: "Playing piano, attending live concerts, and creating playlists for every mood and occasion.",
    },
  ],
  active: [
    {
      name: "Hiking",
      description: "Exploring trails and mountains, with a goal to complete at least one major hike each month.",
    },
    {
      name: "Yoga",
      description:
        "Practicing regularly for both physical and mental well-being, working toward my teacher certification.",
    },
    {
      name: "Swimming",
      description: "Finding peace and exercise in the water, especially in natural settings like lakes and oceans.",
    },
    {
      name: "Cycling",
      description: "Weekend rides exploring the city and countryside, both solo and with local cycling groups.",
    },
  ],
  intellectual: [
    {
      name: "Reading",
      description: "Devouring books across genres, with a special love for literary fiction, philosophy, and memoirs.",
    },
    {
      name: "Languages",
      description: "Currently learning Spanish and refreshing my French, with plans to tackle Japanese next.",
    },
    {
      name: "History",
      description: "Fascinated by ancient civilizations and how historical events shape our present world.",
    },
    {
      name: "Science",
      description: "Amateur astronomy and keeping up with developments in psychology and neuroscience.",
    },
  ],
  social: [
    {
      name: "Community Volunteering",
      description: "Regular involvement with local food banks and environmental cleanup initiatives.",
    },
    {
      name: "Cultural Events",
      description: "Attending art exhibitions, film festivals, and cultural celebrations around the city.",
    },
    {
      name: "Travel",
      description:
        "Exploring new places with an emphasis on connecting with locals and understanding different ways of life.",
    },
    {
      name: "Hosting Gatherings",
      description: "Bringing people together for themed dinners, game nights, and thoughtful discussions.",
    },
  ],
}

export default function Interests() {
  const [activeTab, setActiveTab] = useState("creative")

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Interests & Passions</h2>

      <Tabs defaultValue="creative" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="creative">Creative</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="intellectual">Intellectual</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
        </TabsList>

        {Object.entries(interestCategories).map(([category, interests]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((interest) => (
                <Card key={interest.name}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{interest.name}</h3>
                    <p className="text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
