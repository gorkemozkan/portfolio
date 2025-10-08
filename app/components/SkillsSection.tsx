'use client'

import { useState } from 'react'

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const allSkills = [
    {
      title: "Languages & Fundamentals",
      description: "TypeScript, JavaScript, HTML5, CSS3"
    },

    {
      title: "Mobile Development",
      description: "React Native, Expo, React Native CLI"
    },
    {
      title: "UI & State Management",
      description: "Tailwind CSS, MUI, Vuetify, Ant Design, Context API, Zustand, Pinia, Redux"
    },
        {
      title: "Architecture & Practices",
      description: "Performance Optimization, SEO, Accessibility, Cross-Platform Development"
    },
    {
      title: "Web Frameworks",
      description: "React, Vue, Next.js, Nuxt.js, Remix, Astro"
    },

    {
      title: "Backend & Database",
      description: "Supabase, PostgreSQL, REST APIs, GraphQL, Authentication"
    },
    {
      title: "DevOps & Tools",
      description: "Git Flow, Docker, Node.js, Vercel"
    },
        {
      title: "Testing & Quality",
      description: "Jest, Vitest, E2E Testing, CI/CD"
    },
    {
      title: "Platforms & Deployment",
      description: "App Store, Google Play, TestFlight, CodePush, EAS Build"
    },
  ]

  const displayedSkills = isExpanded ? allSkills : allSkills.slice(0, 4)

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Core Skills</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1.5 group"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Show fewer skills" : "Show all skills"}
        >
          <span>{isExpanded ? "Show Less" : "Show All"}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="animate-in fade-in slide-in-from-top-2 duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">
              {skill.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      {!isExpanded && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-300 dark:to-neutral-700"></div>
            <span>{allSkills.length - 4} more skills</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-300 dark:to-neutral-700"></div>
          </div>
        </div>
      )}
    </div>
  )
}
