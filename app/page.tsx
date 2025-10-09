import { HeroSection } from './components/HeroSection'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { BlogPosts } from './components/BlogPosts'
import { HobbiesSection } from './components/HobbiesSection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <ExperienceTimeline />
      <SkillsSection />
      <BlogPosts />
      <HobbiesSection />
    </>
  )
}
