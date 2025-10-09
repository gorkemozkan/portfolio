import Link from 'next/link'
import { getAllPosts, BlogPostMetadata } from '@/lib/blog/mdx'
import SectionTitle from './SectionTitle'

export function BlogPosts() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) {
    return null
  }

  return (
    <section aria-labelledby="recent-posts-heading">
      <SectionTitle title="Recent Posts" />
      <div className="space-y-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

function BlogPostCard({ post }: { post: BlogPostMetadata }) {
  return (
    <article className="group">
      <Link
        href={`/blog/${post.slug}`}
        className="block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
        </div>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <span className="text-xs text-neutral-500 dark:text-neutral-500 ml-auto">
            {post.readingTime}
          </span>
        </div>
      </Link>
    </article>
  )
}

