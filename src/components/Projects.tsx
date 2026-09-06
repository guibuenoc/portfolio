import { projects } from '../data/projects'
import { Section } from './section'
import { SectionTitle } from './SectionTitle'

export function Projects() {
  return (
    <Section id="projetos">
      <SectionTitle
        number="03"
        title="Projetos"
        subtitle="Coisas que construí e estou construindo."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <h3 className="text-lg font-bold text-text group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}