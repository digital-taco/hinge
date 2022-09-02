import baseStyles from '../base_css.module.css'

export default function BaseInput({
  children,
  className,
  ...props
}: React.ComponentProps<'input'>): JSX.Element {
  return (
    <input {...props} className={`${baseStyles.base_input} ${baseStyles.base_text} ${className}`}>
      {children}
    </input>
  )
}
