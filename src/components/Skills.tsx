import { skillCategories } from '../data/skills'
import { Section } from './section'
import { SectionTitle } from './SectionTitle'

export function Skills() {
  return (
    <Section id="competencias">
      <SectionTitle
        number="02"
        title="Competências"
        subtitle="Tecnologias e ferramentas que uso no dia a dia."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <h3 className="font-mono text-sm text-terminal">
              {category.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border bg-background px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}