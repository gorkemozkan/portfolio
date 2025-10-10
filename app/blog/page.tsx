import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog/mdx'
import { BlogCard } from '@/app/components/BlogCard'
import { baseUrl } from '@/app/sitemap'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, mobile apps, and web technologies.',
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: 'Blog | Görkem Özkan',
    description: 'Read my thoughts on software development, mobile apps, and web technologies.',
    url: `${baseUrl}/blog`,
    siteName: 'Görkem Özkan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section aria-labelledby="blog-heading">
      <h1 id="blog-heading" className="text-3xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
        Blog
      </h1>
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  )
}

