import { useInView } from '../../hooks/useInView'

export function ScrollReveal({
  children,
  delay = 0,
  className = '',
  threshold = 0.1
}) {
  const [ref, isInView] = useInView({ threshold, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
