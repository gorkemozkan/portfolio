import { HeroSection } from './components/HeroSection'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceTimeline } from './components/ExperienceTimeline'

export default function Page() {
  return (
    <section>
      <HeroSection />
      <ExperienceTimeline />
      <SkillsSection />
    </section>
  )
}
