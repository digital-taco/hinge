import baseStyles from '../base_css.module.css'

type BaseListProps = React.ComponentProps<'ul'>

export default function Base({ children, className, ...props }: BaseListProps): JSX.Element {
  return (
    <ul {...props} className={`${baseStyles.base_ul} ${className}`}>
      {children}
    </ul>
  )
}
