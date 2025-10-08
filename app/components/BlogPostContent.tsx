'use client'

import { useEffect, useState } from 'react'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXComponents } from './MDXComponents'

type BlogPostContentProps = {
  source: MDXRemoteSerializeResult
}

export function BlogPostContent({ source }: BlogPostContentProps) {
  const [MDXRemote, setMDXRemote] = useState<any>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    import('next-mdx-remote').then((mod) => {
      setMDXRemote(() => mod.MDXRemote)
      setMounted(true)
    })
  }, [])

  if (!mounted || !MDXRemote) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-pulse text-neutral-600 dark:text-neutral-400">
          Loading content...
        </div>
      </div>
    )
  }

  return <MDXRemote {...source} components={MDXComponents} />
}

