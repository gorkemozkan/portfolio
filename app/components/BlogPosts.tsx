import Link from 'next/link'
import { getAllPosts, BlogPostMetadata } from '@/lib/blog/mdx'
import SectionTitle from './SectionTitle'

interface BlogPostsProps {
  limit?: number
  showTitle?: boolean
  title?: string
  titleId?: string
}

export function BlogPosts({ 
  limit = 3, 
  showTitle = true, 
  title = 'Recent Posts',
  titleId = 'recent-posts'
}: BlogPostsProps = {}) {
  const allPosts = getAllPosts()
  const posts = limit ? allPosts.slice(0, limit) : allPosts

  if (posts.length === 0) {
    return null
  }

  return (
    <section aria-labelledby={showTitle ? titleId : undefined}>
      {showTitle && <SectionTitle title={title} id={titleId} />}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} isLatest={index === 0 && limit === 3} />
        ))}
      </div>
    </section>
  )
}

function BlogPostCard({ post, isLatest }: { post: BlogPostMetadata; isLatest?: boolean }) {
  return (
    <article className="group">
      <Link
        href={`/blog/${post.slug}`}
        className={`block p-4 rounded-lg border transition-all duration-200 ${
          isLatest
            ? 'border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20 hover:border-blue-300 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/30'
            : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            {isLatest && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-500 text-white shadow-sm">
                 New
              </span>
            )}
          </div>
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
          
          <time dateTime={post.date} className="text-xs text-neutral-500 dark:text-neutral-500 ml-auto">
            {post.readingTime}
          </time>
        </div>
      </Link>
    </article>
  )
}

