import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-mono text-xs text-muted">
          <span className="text-terminal">~/portfolio</span> ©{' '}
          {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted">
          construído com <span className="text-accent">React</span> +{' '}
          <span className="text-accent">Tailwind</span>
        </p>
      </div>
    </footer>
  )
}