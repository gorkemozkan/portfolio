import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
   
  },
}

export function Navbar() {

  return (
    <aside className="-ml-[8px] mb-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          id="navigation"
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          aria-label="Main navigation"
        >
          <div className="flex flex-row flex-wrap items-center gap-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isExternal = path.startsWith('http') || path.startsWith('mailto:')
              const isMailto = path.startsWith('mailto:')

              return (
                <Link
                  key={path}
                  href={path}
                  className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden transition-all duration-300  hover:shadow-md "
                  aria-label={isMailto ? `Send email to ${name}` : isExternal ? `Visit ${name} (opens in new tab)` : `Navigate to ${name}`}
                  {...(isExternal && !isMailto ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-colors duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <span className="relative z-10 font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-300 capitalize">
                    {name}
                  </span>
                  {isExternal && !isMailto && (
                    <svg 
                      className="relative z-10 w-3 h-3 text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors duration-300 transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
