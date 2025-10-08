import { getAllPosts } from '@/lib/blog/mdx'

export const baseUrl = 'https://ozgorkem.com'

export default async function sitemap() {
  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  // Add blog posts to sitemap
  const posts = getAllPosts()
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }))

  return [...routes, ...blogRoutes]
}
