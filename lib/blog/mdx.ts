import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { format, parseISO } from 'date-fns'

const BLOG_PATH = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  formattedDate: string
  readingTime: string
  tags?: string[]
  author?: string
  published?: boolean
  content: string
}

export type BlogPostMetadata = Omit<BlogPost, 'content'>


function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return []
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string): {
  metadata: Partial<BlogPost>
  content: string
} {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(rawContent)
  
  return {
    metadata: data as Partial<BlogPost>,
    content,
  }
}

export function getAllPosts(): BlogPostMetadata[] {
  const mdxFiles = getMDXFiles(BLOG_PATH)
  
  const posts = mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(BLOG_PATH, file))
    const slug = path.basename(file, path.extname(file))
    
    return {
      slug,
      title: metadata.title || 'Untitled',
      description: metadata.description || '',
      date: metadata.date || new Date().toISOString(),
      formattedDate: metadata.date
        ? format(parseISO(metadata.date), 'MMMM dd, yyyy')
        : '',
      readingTime: readingTime(content).text,
      tags: metadata.tags || [],
      author: metadata.author || 'Görkem Özkan',
      published: metadata.published !== false,
    }
  })
  
  const filteredPosts = posts.filter((post) => 
    process.env.NODE_ENV === 'development' || post.published
  )
  
  return filteredPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const { metadata, content } = readMDXFile(filePath)
    
    return {
      slug,
      title: metadata.title || 'Untitled',
      description: metadata.description || '',
      date: metadata.date || new Date().toISOString(),
      formattedDate: metadata.date
        ? format(parseISO(metadata.date), 'MMMM dd, yyyy')
        : '',
      readingTime: readingTime(content).text,
      tags: metadata.tags || [],
      author: metadata.author || 'Görkem Özkan',
      published: metadata.published !== false,
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

