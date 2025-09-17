import { baseUrl } from './sitemap'

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Allow all major search engines to crawl the site
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

# Block access to sensitive areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
