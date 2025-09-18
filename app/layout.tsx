import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { StructuredData } from './components/StructuredData'
import { SkipLinks } from './components/SkipLinks'
import { ErrorBoundary } from './components/ErrorBoundary'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Görkem Özkan - Full-Stack Frontend & Mobile Developer',
    template: '%s | Görkem Özkan',
  },
  description: 'Full-stack developer with 5+ years of experience in React Native, Expo, TypeScript, React, Vue, and Supabase. Building performant web apps and cross-platform mobile applications with expertise in full-stack development, real-time databases, authentication, and user experience.',
  keywords: ['Full-Stack Developer', 'React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Mobile Development', 'React', 'TypeScript', 'Vue', 'Next.js', 'Web Development', 'SSR', 'SPA', 'Cross-platform', 'iOS', 'Android', 'Backend', 'Database', 'Real-time'],
  authors: [{ name: 'Görkem Özkan', url: 'https://ozgorkem.com' }],
  creator: 'Görkem Özkan',
  publisher: 'Görkem Özkan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Görkem Özkan - Full-Stack Frontend & Mobile Developer',
    description: 'Full-stack developer with 5+ years of experience in React Native, Expo, TypeScript, React, Vue, and Supabase. Building performant web apps and cross-platform mobile applications with expertise in full-stack development, real-time databases, authentication, and user experience.',
    url: baseUrl,
    siteName: 'Görkem Özkan Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Görkem Özkan - Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Görkem Özkan - Full-Stack Frontend & Mobile Developer',
    description: 'Full-stack developer with 5+ years of experience in React Native, Expo, TypeScript, React, Vue, and Supabase.',
    creator: '@ozgorkem',
    images: [`${baseUrl}/og-image.png`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  other: {
    'theme-color': '#000000',
    'color-scheme': 'light dark',
    'msapplication-TileColor': '#000000',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Görkem Özkan',
    // PWA Manifest
    'manifest': '/manifest.json',
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black')}
    >
      <head>
        <StructuredData />
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <SkipLinks />
        <header>
          <Navbar />
        </header>
        <main
          id="main-content"
          className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0"
          role="main"
          aria-label="Main content"
        >
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      // console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      //console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
