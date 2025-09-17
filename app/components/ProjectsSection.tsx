function ExternalLinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function ProjectCard({ title, description, features, technologies, link, status }: {
  title: string
  description: string
  features: string[]
  technologies: { name: string; color: string }[]
  link?: string
  status?: string
}) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
        <div className="flex items-center space-x-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              aria-label={`Visit ${title} website`}
            >
              <ExternalLinkIcon />
            </a>
          )}
          {status && (
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-md">
              {status}
            </span>
          )}
        </div>
      </div>

      <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">Key Features:</h4>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className={`px-2 py-1 text-xs ${tech.color} rounded-md`}>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Only Menu",
      description: "A comprehensive digital QR menu platform designed specifically for modern cafes and restaurants. Features instant QR code generation, complete menu management, real-time updates, and mobile-optimized dining experiences.",
      features: [
        "Instant QR code generation with PDF export",
        "Complete menu management with drag-and-drop organization",
        "Real-time menu updates across all devices",
        "Media management with secure cloud storage",
        "Mobile-first responsive design",
        "Multi-currency support for international businesses"
      ],
      technologies: [
        { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
        { name: "TypeScript", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
        { name: "Supabase", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
        { name: "Tailwind CSS", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
        { name: "Next.js", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200" }
      ],
      link: "https://www.only-menu.com/"
    },

  ]

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          More projects available on{' '}
          <a
            href="https://github.com/gorkemozkan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  )
}
