import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the response
  const response = NextResponse.next()

  // Security Headers
  const securityHeaders = {
    // Content Security Policy
    'Content-Security-Policy': `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel.com https://*.vercel-analytics.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https:;
      connect-src 'self' https://*.vercel.com https://*.vercel-analytics.com https://*.vercel-speed-insights.com;
      frame-ancestors 'none';
    `.replace(/\s+/g, ' ').trim(),

    // Prevent clickjacking
    'X-Frame-Options': 'DENY',

    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',

    // Enable XSS protection
    'X-XSS-Protection': '1; mode=block',

    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // Permissions Policy (formerly Feature Policy)
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',

    // HSTS (HTTP Strict Transport Security)
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',

    // Remove server information
    'X-Powered-By': '',

    // Prevent caching of sensitive content
    'Cache-Control': 'public, max-age=31536000, immutable',
  }

  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Add custom headers for additional security
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless')
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml (sitemap file)
     * - robots.txt (robots file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
