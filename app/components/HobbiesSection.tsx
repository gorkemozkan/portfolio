'use client'

export function HobbiesSection() {
  const hobbies = [
    {
      title: "Cars & Motorsport",
      icon: "🏎️",
      description: "Enthusiast of cars and motorsports, fascinated by the mechanics, performance, and emotion behind every drive.",
      tags: ["Petrolhead", "Automotive Engineering"]
    },
    {
      title: "Music",
      icon: "🎵",
      description: "I play several instruments and have studied Turkish folk and classical music, explored harmony, and even taught music during university.",
      tags: ["Baglama", "Violin", "Turkish Folk Music", "Classical Music"]
    },
  ]

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-5">
        Beyond Code
      </h2>
      
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
                <div className="flex flex-wrap gap-2">
                  {hobby.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

