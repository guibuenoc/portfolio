import { profile } from '../data/profile'
import { Section } from './section'
import { SectionTitle } from './SectionTitle'

export function About() {
  return (
    <Section id="sobre">
      <SectionTitle
        number="01"
        title="Sobre"
        subtitle="Quem sou e o que eu faço."
      />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <p className="leading-relaxed text-muted">{profile.bio}</p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={profile.cvUrl}
              className="rounded border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Currículo
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6 font-mono text-sm">
          <p className="text-muted">
            <span className="text-accent">$</span> cat info.txt
          </p>
          <ul className="mt-4 space-y-3 text-text">
            <li>
              <span className="text-terminal">local:</span> {profile.location}
            </li>
            <li>
              <span className="text-terminal">email:</span> {profile.email}
            </li>
            <li>
              <span className="text-terminal">cargo:</span> {profile.role}
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}