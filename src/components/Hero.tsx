import { profile } from '../data/profile'

export function Hero() {
  return (
    <section id="top" className="flex min-h-screen items-center pt-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-12 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="w-fit rounded-lg border border-border bg-surface p-8 font-mono text-base sm:p-10">
          <p className="text-muted">
            <span className="text-accent">$</span> whoami
          </p>
          <p className="mt-2 text-2xl font-bold text-text sm:text-3xl">
            {profile.name}
          </p>

          <p className="mt-8 text-muted">
            <span className="text-accent">$</span> stack --focus
          </p>
          <p className="mt-2 text-terminal">{profile.role}</p>

          <p className="mt-8 text-muted">
            <span className="text-accent">$</span> status
          </p>
          <p className="mt-2 text-text">{profile.tagline}</p>

          <p className="mt-10 text-muted">
            <span className="text-accent">$</span>{' '}
            <span className="inline-block h-5 w-2.5 animate-pulse bg-terminal align-middle" />
          </p>
        </div>

        <div className="group shrink-0">
          <div className="overflow-hidden rounded-lg border-2 border-border bg-surface p-2 transition-all duration-300 group-hover:border-accent group-hover:shadow-lg">
            <img
              src="/foto.jpg"
              alt={profile.name}
              className="aspect-square w-64 object-cover transition-transform duration-300 group-hover:scale-105 sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}