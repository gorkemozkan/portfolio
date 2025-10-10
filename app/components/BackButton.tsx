import Link from 'next/link'

interface BackButtonProps {
  href?: string
  label?: string
  ariaLabel?: string
}

export function BackButton({ 
  href = '/', 
  label = 'Back to Home',
  ariaLabel = 'Back to home page'
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-6"
      aria-label={ariaLabel}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      {label}
    </Link>
  )
}

