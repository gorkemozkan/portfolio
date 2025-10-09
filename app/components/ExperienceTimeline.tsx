'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'

interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string
  image?: string
}

const experiences: Experience[] = [
  {
    company: 'HubX',
    role: 'Software Developer',
    period: 'October 2025 - Present',
    location: 'İzmir, Türkiye',
    description:'',
    image: 'https://media.licdn.com/dms/image/v2/D4D0BAQGue8ru1iGfpA/company-logo_200_200/company-logo_200_200/0/1736433904073/hubxstudios_logo?e=1762992000&v=beta&t=zYDClcZfMQIOHquQbqkqfOg_tU8meRkK_7UQvWzMlLA'
  },
  {
    company: 'PR Yazılım',
    role: 'Software Developer',
    period: 'January 2024 - August 2025 (1 year 8 months)',
    location: 'İzmir, Türkiye',
    description: 'I contributed to the development of SSR and SPA applications using Next.js and React, while also building cross-platform mobile apps with React Native and Expo. I converted Figma designs into responsive, pixel-perfect interfaces and built a reusable library of hooks, utilities, and components that made feature development faster. I updated legacy codebases by migrating them to TypeScript and applying React best practices. In addition to coding, I supported junior developers, participated in code reviews, and helped the team write cleaner code by organizing knowledge-sharing sessions.',
    image: 'https://media.licdn.com/dms/image/v2/C4D0BAQGQ4WA6iT3nPA/company-logo_200_200/company-logo_200_200/0/1630476613519/pr_yazlm_a_logo?e=1762992000&v=beta&t=ByMW0g-ntWJujuteDs65jBFUNCP8ZsRuR2D-JuIZGpA'
  },
  {
    company: 'StoreSpy',
    role: 'Software Developer',
    period: 'November 2021 - June 2023 (1 year 8 months)',
    location: 'İstanbul, Türkiye',
    description: 'I worked on an App Store Optimization & intelligence platform, where I built high-performing SPA and SSR applications with modern web technologies. I designed and maintained UIs using SCSS, TailwindCSS, and Vuetify.js, and introduced unit and E2E testing to improve stability. I refactored existing code for performance and maintainability, developed reusable components and utilities, and set up CI pipelines to automate testing. A key achievement was migrating a large JavaScript codebase to TypeScript, which improved type safety, reduced runtime errors, and enhanced overall SEO and web vitals.',
    image: 'https://media.licdn.com/dms/image/v2/C4D0BAQFYiXKbprZV2g/company-logo_200_200/company-logo_200_200/0/1669880715115/storespy_logo?e=1762992000&v=beta&t=Bxw56Vrl27lFA03QhNgrVFUiI3YRsOqLTI_ujU16zS0'
  },
  {
    company: 'Nera Social',
    role: 'Software Developer',
    period: 'July 2020 - June 2021 (1 year)',
    location: 'İzmir, Türkiye',
    description: 'I contributed to the development of a SaaS-based social media management platform designed for SMEs and personal brands. I turned concepts into Figma prototypes and then built responsive, cross-device interfaces with CSS, SCSS, and TailwindCSS. I developed single-page applications in React.js, ensuring fast and dynamic user experiences, and maintained code quality with Jest unit tests. I also optimized cross-browser compatibility, delivering consistent designs across all screen sizes.',
    image: 'https://media.licdn.com/dms/image/v2/D4D0BAQEdms-vd4d9Xw/company-logo_200_200/company-logo_200_200/0/1735633721177/neramarketingagency_logo?e=1762992000&v=beta&t=HUnYwn3ZB--JDYKbdUJ7vNIUZV0NoE8XrKymTd5CRiw'
  },
  {
    company: 'Korozo Group',
    role: 'IT Intern',
    period: 'September 2015 - June 2016 (10 months)',
    location: 'İzmir, Türkiye',
    description: 'Assisted with setting up, configuring, and maintaining network systems to ensure reliable and secure connectivity across the organization. Helped troubleshoot issues by diagnosing problems, monitoring performance, and applying updates or fixes under senior supervision. Gained practical experience working with routers, switches, firewalls, and network monitoring tools, and maintained detailed records of configurations and changes for future reference.',
    image: 'https://media.licdn.com/dms/image/v2/D4D0BAQGqPx0kUJ1UTw/company-logo_200_200/company-logo_200_200/0/1733829091708/korozo_group_logo?e=1762992000&v=beta&t=SGUG-qUwVaTqy8Ip9QbEsc1tdSGOKumA4Dp8mr9rZzQ'
  }
]

export function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <div >
      <SectionTitle title="Experiences" />
      <div className="relative">
        <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-100 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900" />
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isFirst  = index === 0
            return (
            <div 
              key={index} 
              className="relative pl-8 group opacity-0 animate-fadeInUp"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className={`absolute left-0 top-2 w-4 h-4 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg ${
                isFirst 
                  ? 'bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 border-2 border-blue-500 dark:border-blue-400 shadow-xl shadow-blue-500/50 animate-pulse group-hover:shadow-blue-500/70' 
                  : 'bg-white dark:bg-neutral-950 border-2 border-neutral-400 dark:border-neutral-600 group-hover:border-neutral-500 group-hover:shadow-neutral-500/20'
              }`}>
                {isFirst && (
                  <div className="absolute -inset-1 bg-blue-500/20 rounded-full animate-ping" />
                )}
              </div>

              <div 
                className={`rounded-lg p-4 border transition-all duration-300 hover:shadow-lg relative overflow-hidden ${
                  isFirst 
                    ? 'bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/10 border-blue-400 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-600 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30' 
                    : 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                } ${exp.description.length > 0 ? 'hover:border-neutral-500 hover:shadow-neutral-500/20 cursor-pointer' : ''}`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
              
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div className="flex items-start gap-3">
                    {exp.image && (
                      <div className="flex-shrink-0 w-12 h-12 relative">
                        <Image
                          src={exp.image}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                      {exp.period.split(' (')[0]}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {exp.period.match(/\((.*?)\)/)?.[1] || exp.period}
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                {exp.description.length > 0 && <button 
                  className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors mt-2"
                  aria-label={expandedIndex === index ? 'Show less' : 'Show more'}
                >
                  <span>{expandedIndex === index ? 'Show less' : 'Show more'}</span>
                  <svg 
                    className={`w-3 h-3 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>}
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  )
}

