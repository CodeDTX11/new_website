export function SectionDivider({ variant = 'to-alt' }) {
  const className = variant === 'to-alt' ? 'divider-to-alt' : 'divider-to-primary'

  return (
    <div className={`section-divider ${className}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 L1200,80 L1200,120 L0,120 Z" />
      </svg>
    </div>
  )
}
