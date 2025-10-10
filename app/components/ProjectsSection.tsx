function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
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
    <article className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
            {title}
          </h3>
          {status && (
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-md">
              {status}
            </span>
          )}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            aria-label={`Visit ${title} project`}
          >
            {link.includes('github.com') ? (
              <>
                <GitHubIcon />
                <span className="hidden sm:inline">Code</span>
              </>
            ) : (
              <>
                <ExternalLinkIcon />
                <span className="hidden sm:inline">Visit</span>
              </>
            )}
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <div className="mb-5">
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Key Features
        </h4>
        <ul className="space-y-1.5">
          {features.slice(0, 6).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="text-neutral-400 dark:text-neutral-500">•</span>
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className={`px-2.5 py-1 text-xs font-medium ${tech.color} rounded-md`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const projects = [

    {
      title: "Earthquake Scrapper",
      description: "A modular TypeScript application for crawling, filtering, and reporting earthquake data from Kandilli Observatory (KOERI). Features a layered architecture with flexible filtering by province, location keywords, magnitude, depth, and date ranges. Outputs comprehensive reports in both JSON and Markdown formats.",
      features: [
        "Layered architecture with service-based design pattern",
        "Flexible multi-criteria filtering (province, keywords, magnitude, depth, date)",
        "Multiple output formats (JSON and Markdown reports)",
      ],
      technologies: [
        { name: "TypeScript", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
        { name: "Node.js", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
      ],
      link: "https://github.com/gorkemozkan/earthquake-scraper",
      status: "Active"
    }
  ]

  return (
    <section aria-labelledby="featured-projects" className="mb-8">
      <h2 id="featured-projects" className="text-xl font-semibold mb-6">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
