'use client'

import { useState } from 'react'

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const allSkills = [
    {
      category: "Languages & Fundamentals",
      skills: ["TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Web Frameworks",
      skills: ["React", "Vue", "Next.js", "Nuxt.js", "Astro"]
    },
    {
      category: "Mobile Development",
      skills: ["React Native", "Expo", "React Native CLI"]
    },
    {
      category: "UI Libraries",
      skills: ["Tailwind CSS", "MUI", "Vuetify", "Ant"]
    },
    {
      category: "State Management",
      skills: ["Context API", "Zustand", "Pinia", "Redux"]
    },
    {
      category: "Backend & Database",
      skills: ["Supabase", "PostgreSQL", "GraphQL"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Node.js"]
    },
    {
      category: "Testing & Quality",
      skills: ["Jest", "Vitest", "E2E Testing"]
    },
    {
      category: "Architecture & Practices",
      skills: ["Performance Optimization", "SEO", "Accessibility", "Cross-Platform Development"]
    },
    {
      category: "Platforms & Deployment",
      skills: ["App Store", "Google Play", "TestFlight", "CodePush", "EAS Build"]
    },
  ]

  const displayedSkills = isExpanded ? allSkills : allSkills.slice(0, 4)

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Core Skills
        </h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1.5"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Show fewer skills" : "Show all skills"}
        >
          <span>{isExpanded ? "Show Less" : "Show All"}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
          >
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2.5">
              {skill.category}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {skill.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>

      {!isExpanded && (
        <div className="mt-5 text-center">
          <span className="text-sm text-neutral-500 dark:text-neutral-500">
            {allSkills.length - 4} more categories
          </span>
        </div>
      )}
    </div>
  )
}
