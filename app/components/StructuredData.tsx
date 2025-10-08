import { baseUrl } from '../sitemap'
import { getAllPosts } from '@/lib/blog/mdx'

export function StructuredData() {
  const posts = getAllPosts()
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Görkem Özkan",
    "jobTitle": "Full-Stack Frontend & Mobile Developer",
    "description": "Full-stack developer with 5+ years of experience in React Native, Expo, TypeScript, React, Vue, and Supabase. Building performant web apps and cross-platform mobile applications.",
    "url": baseUrl,
    "sameAs": [
      "https://github.com/ozgorkem",
      "https://linkedin.com/in/ozgorkem",
      "https://ozgorkem.com"
    ],
    "knowsAbout": [
      "React Native",
      "Expo",
      "TypeScript",
      "React",
      "Vue.js",
      "Angular",
      "Supabase",
      "PostgreSQL",
      "Next.js",
      "Node.js",
      "Mobile Development",
      "Web Development",
      "Cross-platform Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Turkey"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Dokuz Eylül University"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Görkem Özkan Portfolio",
    "url": baseUrl,
    "description": "Portfolio of Görkem Özkan, a Full-Stack Frontend & Mobile Developer specializing in React Native, Expo, and modern web technologies.",
    "founder": {
      "@type": "Person",
      "name": "Görkem Özkan"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "developer@ozgorkem.com",
      "contactType": "customer service"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Görkem Özkan Portfolio",
    "url": baseUrl,
    "description": "Portfolio showcasing full-stack development projects and expertise in React Native, Expo, TypeScript, and modern web technologies.",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Person",
      "name": "Görkem Özkan"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  const blogSchema = posts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Görkem Özkan's Blog",
    "description": "Articles about web development, mobile development, JavaScript, TypeScript, and software engineering best practices.",
    "url": `${baseUrl}/blog`,
    "author": {
      "@type": "Person",
      "name": "Görkem Özkan"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `${baseUrl}/blog/${post.slug}`,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Person",
        "name": post.author || "Görkem Özkan"
      },
      "publisher": {
        "@type": "Person",
        "name": "Görkem Özkan"
      },
      "keywords": post.tags?.join(', ') || '',
      "articleSection": "Technology",
      "inLanguage": "en-US"
    }))
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      {blogSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogSchema)
          }}
        />
      )}
    </>
  )
}
