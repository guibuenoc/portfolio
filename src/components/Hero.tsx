import { profile } from '../data/profile'

export function Hero() {
  return (
    <section id="top" className="flex min-h-screen items-center pt-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-surface p-6 font-mono text-sm sm:p-8">
          <p className="text-muted">
            <span className="text-accent">$</span> whoami
          </p>
          <p className="mt-1 text-xl font-bold text-text sm:text-2xl">
            {profile.name}
          </p>

          <p className="mt-6 text-muted">
            <span className="text-accent">$</span> stack --focus
          </p>
          <p className="mt-1 text-terminal">{profile.role}</p>

          <p className="mt-6 text-muted">
            <span className="text-accent">$</span> status
          </p>
          <p className="mt-1 text-text">{profile.tagline}</p>

          <p className="mt-8 text-muted">
            <span className="text-accent">$</span>{' '}
            <span className="inline-block h-4 w-2 animate-pulse bg-terminal align-middle" />
          </p>
        </div>
      </div>
    </section>
  )
}