"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

// Skill categories and their respective skills
const skillCategories = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "Prisma", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "PostgreSQL", level: 60 },
    { name: "GraphQL", level: 70 },
  ],
  design: [
    { name: "Figma", level: 85 },
    { name: "Adobe XD", level: 75 },
    { name: "UI/UX Design", level: 80 },
    { name: "Responsive Design", level: 90 },
    { name: "Wireframing", level: 85 },
    { name: "Prototyping", level: 80 },
  ],
  other: [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 65 },
    { name: "CI/CD", level: 70 },
    { name: "Testing (Jest, Cypress)", level: 75 },
    { name: "Performance Optimization", level: 80 },
    { name: "Accessibility", level: 85 },
  ],
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>

      <Tabs defaultValue="frontend" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
