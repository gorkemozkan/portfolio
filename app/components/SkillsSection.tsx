export function SkillsSection() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Core Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Languages & Fundamentals</h3>
          <p className="text-neutral-600 dark:text-neutral-400">TypeScript, JavaScript, HTML5, CSS3</p>
        </div>
        <div>
          <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Web Frameworks</h3>
          <p className="text-neutral-600 dark:text-neutral-400"> React, Vue, Next.js, Nuxt.js, Remix, Astro</p>
        </div>
        <div>
          <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Mobile Development</h3>
          <p className="text-neutral-600 dark:text-neutral-400">React Native, Expo, React Native CLI</p>
        </div>
        <div>
          <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">UI & State Management</h3>
          <p className="text-neutral-600 dark:text-neutral-400">Tailwind CSS, Material UI, Vuetify, Ant Design, Context API, Zustand, Pinia, Redux Toolkit</p>
        </div>
        <div>
          <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Testing & Quality</h3>
          <p className="text-neutral-600 dark:text-neutral-400">Jest, Vitest, E2E Testing, CI/CD</p>
        </div>
        <div>
          <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Architecture & Practices</h3>
          <p className="text-neutral-600 dark:text-neutral-400">Performance Optimization, SEO, WCAG Accessibility, Cross-platform Development</p>
        </div>
        <div>
          <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Backend & Database</h3>
          <p className="text-neutral-600 dark:text-neutral-400">Supabase, PostgreSQL, REST APIs, GraphQL, Authentication</p>
        </div>
        <div>
          <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">DevOps & Tools</h3>
          <p className="text-neutral-600 dark:text-neutral-400">Git Flow, Docker, Node.js, Vercel</p>
        </div>
        <div>
          <h3 className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Platforms & Deployment</h3>
          <p className="text-neutral-600 dark:text-neutral-400">App Store, Google Play, TestFlight, CodePush, EAS Build</p>
        </div>
      </div>
    </div>
  )
}
