import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  'https://github.com/gorkemozkan': {
    name: 'github',
  },
  'https://linkedin.com/in/görkemözkan': {
    name: 'linkedin',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          id="navigation"
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex flex-row space-x-0 pr-10" role="menubar">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isExternal = path.startsWith('http') || path.startsWith('mailto:')
              const isMailto = path.startsWith('mailto:')

              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 focus:text-neutral-800 dark:focus:text-neutral-200 flex align-middle relative py-1 px-2 m-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
                  role="menuitem"
                  aria-label={isMailto ? `Send email to ${name}` : isExternal ? `Visit ${name} (opens in new tab)` : `Navigate to ${name}`}
                  {...(isExternal && !isMailto ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
