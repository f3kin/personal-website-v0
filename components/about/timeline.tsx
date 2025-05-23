"use client"

import { motion } from "framer-motion"

// Timeline data
const timelineItems = [
  {
    id: 1,
    type: "work",
    title: "Senior Frontend Developer",
    organization: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Leading the frontend development team, architecting and implementing complex web applications using React, Next.js, and TypeScript. Mentoring junior developers and establishing best practices.",
  },
  {
    id: 2,
    type: "work",
    title: "Frontend Developer",
    organization: "Digital Solutions Agency",
    period: "2019 - 2021",
    description:
      "Developed responsive websites and web applications for various clients across different industries. Collaborated with designers and backend developers to deliver high-quality products.",
  },
  {
    id: 3,
    type: "education",
    title: "Master of Computer Science",
    organization: "University of Technology",
    period: "2017 - 2019",
    description:
      'Specialized in Human-Computer Interaction and Web Technologies. Thesis on "Improving User Experience in Progressive Web Applications".',
  },
  {
    id: 4,
    type: "work",
    title: "Junior Web Developer",
    organization: "StartUp Hub",
    period: "2016 - 2019",
    description:
      "Worked on frontend development for early-stage startups. Gained experience in rapid prototyping and agile development methodologies.",
  },
  {
    id: 5,
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "State University",
    period: "2012 - 2016",
    description:
      "Graduated with honors. Focused on software engineering and web development. Participated in various hackathons and coding competitions.",
  },
]

export default function Timeline() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Experience & Education</h2>

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
                item.type === "work" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"
              }`}
            >
              {item.type === "work" ? "Work Experience" : "Education"}
            </div>

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <span>{item.organization}</span>
              <span className="text-xs">•</span>
              <span>{item.period}</span>
            </div>
            <p className="mt-3 text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
