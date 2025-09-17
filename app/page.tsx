import { HeroSection } from './components/HeroSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'

export default function Page() {
  return (
    <section>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </section>
  )
}
