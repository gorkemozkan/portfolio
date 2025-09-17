import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            404
          </div>
          <svg
            className="mx-auto h-24 w-24 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.98-5.5-2.5m.5-7.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Page Not Found
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            aria-label="Go back to homepage"
          >
            Go Home
          </Link>

          <div>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-base font-medium rounded-md text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              aria-label="Browse blog posts"
            >
              Browse Blog
            </Link>
          </div>
        </div>

        <div className="mt-12 text-sm text-neutral-500 dark:text-neutral-500">
          <p>If you believe this is an error, please{' '}
            <a
              href="mailto:developer@ozgorkem.com"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
              aria-label="Contact developer via email"
            >
              contact me
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Page Not Found - Görkem Özkan',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}