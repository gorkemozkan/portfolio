'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXComponents } from './MDXComponents'

type BlogPostContentProps = {
  source: MDXRemoteSerializeResult
}

export function BlogPostContent({ source }: BlogPostContentProps) {
  return <MDXRemote {...source} components={MDXComponents} />
}

