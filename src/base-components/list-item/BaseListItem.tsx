import baseStyles from '../base_css.module.css'

type BaseListItemProps = React.ComponentPropsWithRef<'li'>

export default function BaseListItem({
  children,
  className,
  ...props
}: BaseListItemProps): JSX.Element {
  return (
    <li {...props} className={`${baseStyles.base_li} ${baseStyles.base_text} ${className}`}>
      {children}
    </li>
  )
}
