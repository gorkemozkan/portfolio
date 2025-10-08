import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from '@mapbox/rehype-prism'
import { getAllPosts, getPostBySlug } from '@/lib/blog/mdx'
import { baseUrl } from '@/app/sitemap'
import { BlogPostContent } from '@/app/components/BlogPostContent'
import Link from 'next/link'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author || 'Görkem Özkan' }],
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Görkem Özkan'],
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: 'Görkem Özkan Portfolio',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@ozgorkem',
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Serialize MDX on the server for SEO with syntax highlighting
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
      rehypePlugins: [rehypePrism],
    },
  })

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 no-underline inline-flex items-center mb-4"
        >
          ← Back to blog
        </Link>
        
        <h1 className="text-4xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
          {post.author && (
            <>
              <span>•</span>
              <span>{post.author}</span>
            </>
          )}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <hr className="border-neutral-200 dark:border-neutral-800" />
      </div>

      <div className="blog-content">
        <BlogPostContent source={mdxSource} />
      </div>

      <hr className="mt-12 border-neutral-200 dark:border-neutral-800" />

      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 no-underline"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  )
}

