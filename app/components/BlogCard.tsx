import Link from 'next/link'
import { BlogPostMetadata } from '@/lib/blog/mdx'

type BlogCardProps = {
  post: BlogPostMetadata
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
    >
      <article>
        <div className="flex items-center justify-between mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span>{post.readingTime}</span>
        </div>
        
        <h2 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
        
        <p className="text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">
          {post.description}
        </p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}

