interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'outline'
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50'
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90',
    danger: 'bg-danger text-white hover:opacity-90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}