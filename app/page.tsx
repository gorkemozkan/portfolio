import { HeroSection } from '@/app/components/HeroSection'
import { ExperienceTimeline } from '@/app/components/ExperienceTimeline'
import { ProjectsSection } from '@/app/components/ProjectsSection'
import { BlogPosts } from '@/app/components/BlogPosts'

export default function Page() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <BlogPosts />
    </div>
  )
}
