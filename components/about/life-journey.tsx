"use client"

import { motion } from "framer-motion"

// Timeline data
const timelineItems = [
  {
    id: 1,
    type: "milestone",
    title: "Self-Employment",
    period: "2025",
    description:
      "Quit my job, stopped studying, and went all in on running businesses and startups.",
  },
  {
    id: 2,
    type: "milestone",
    title: "Launched Holonomy",
    period: "2024",
    description:
      "Launched my first startup, failed lots and learned lots.",
  },
  {
    id: 3,
    type: "learning",
    title: "Joined my first startup",
    period: "2023",
    description:
      "Started working at No Sense Entertainment fixing Vending Machines.",
  },
  {
    id: 4,
    type: "milestone",
    title: "Graduated Highschool",
    period: "2021",
    description: "Finished school and moved to Melbourne.",
  },
]

export default function LifeJourney() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Life Journey</h2>

      <div className="relative border-l border-primary/30 pl-8 ml-4 space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-12 mt-1.5 h-4 w-4 rounded-full border border-primary bg-background"></div>

            {/* Timeline badge */}
            <div
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 ${
                item.type === "milestone"
                  ? "bg-primary/10 text-primary"
                  : item.type === "travel"
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                    : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
              }`}
            >
              {item.type === "milestone" ? "Life Milestone" : item.type === "travel" ? "Travel" : "Learning"}
            </div>

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="text-muted-foreground mt-1">
              <span>{item.period}</span>
            </div>
            <p className="mt-3 text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
