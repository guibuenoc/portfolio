import { experiences, education } from '../data/experience'
import { Section } from './section'
import { SectionTitle } from './SectionTitle'

export function Experience() {
  return (
    <Section id="experiencia">
      <SectionTitle
        number="04"
        title="Experiência"
        subtitle="Minha trajetória profissional e formação."
      />

      <div className="space-y-8">
        {experiences.map((item) => (
          <article
            key={item.company}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold text-text">
                {item.role} <span className="text-accent">@</span> {item.company}
              </h3>
              <span className="font-mono text-xs text-muted">{item.period}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

           <h3 className="mt-12 font-mono text-sm text-terminal">Formação</h3>
      <div className="mt-4 space-y-6">
        {education.map((item) => (
          <article
            key={item.institution}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-lg font-bold text-text">{item.course}</h4>
              <span className="font-mono text-xs text-muted">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-accent">{item.institution}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}