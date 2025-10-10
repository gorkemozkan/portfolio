import { Metadata } from 'next'
import { BlogPosts } from '@/app/components/BlogPosts'
import { BackButton } from '@/app/components/BackButton'
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
  return (
    <section aria-labelledby="blog-heading">
      <BackButton />
      <h1 id="blog-heading" className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
        Blog
      </h1>
      <BlogPosts limit={0} showTitle={false} />
    </section>
  )
}

