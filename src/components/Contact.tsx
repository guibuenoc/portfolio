import { profile } from '../data/profile'
import { Section } from './section'
import { SectionTitle } from './SectionTitle'

export function Contact() {
  return (
    <Section id="contato">
      <SectionTitle
        number="05"
        title="Contato"
        subtitle="Vamos conversar?"
      />

      <div className="rounded-lg border border-border bg-surface p-6 font-mono text-sm sm:p-8">
        <p className="text-muted">
          <span className="text-accent">$</span> contato --info
        </p>
        <div className="mt-6 space-y-4">
          <p>
            <span className="text-terminal">email:</span>{' '}
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:underline"
            >
              {profile.email}
            </a>
          </p>
          <p>
            <span className="text-terminal">github:</span>{' '}
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              {profile.social.github}
            </a>
          </p>
          <p>
            <span className="text-terminal">linkedin:</span>{' '}
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              {profile.social.linkedin}
            </a>
          </p>
        </div>
      </div>
    </Section>
  )
}