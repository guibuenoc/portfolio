interface SectionTitleProps {
  number: string
  title: string
  subtitle?: string
}

export function SectionTitle({ number, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <span className="font-mono text-sm text-accent">{number}</span>
      <h2 className="mt-2 text-2xl font-bold text-text sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </div>
  )
}