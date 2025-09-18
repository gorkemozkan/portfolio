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

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Block access to Next.js internal files
Disallow: /_next/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (respectful crawling for small portfolio site)
Crawl-delay: 1`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
