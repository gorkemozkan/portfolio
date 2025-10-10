'use client'

import SectionTitle from "./SectionTitle"

export function HobbiesSection() {
  const hobbies = [
    {
      title: "Cars & Motorsport",
      icon: "🏎️",
      description: "Enthusiast of cars and motorsports, fascinated by the mechanics, performance, and emotion behind every drive.",
    },
    {
      title: "Music",
      icon: "🎵",
      description: "I play several instruments and have studied Turkish folk and classical music, explored harmony, and even taught music during university.",
    },
    {
      title: "Running",
      icon: "🏃",
      description: "Passionate about running and staying active, enjoying the mental clarity and physical challenge it brings.",
    },
  ]

  return (
    <div>
      <SectionTitle title="Beyond Code" />
      <div className="grid grid-cols-1 gap-5">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="group p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-neutral-900/30"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">
                {hobby.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {hobby.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                  {hobby.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

