export function Button({
  children,
  variant = 'primary',
  href,
  download,
  target,
  rel,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const baseClass = variant === 'primary' ? 'btn-primary-custom' : 'btn-secondary-custom'
  const combinedClass = `${baseClass} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={combinedClass}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      {children}
    </button>
  )
}
