import { forwardRef } from 'react'
import baseStyles from '../base_css.module.css'

type BaseListProps = React.ComponentProps<'ul'>

function BaseList(
  { children, className, ...props }: BaseListProps,
  ref: React.Ref<HTMLUListElement>
): JSX.Element {
  return (
    <ul {...props} className={`${baseStyles.base_ul} ${className}`} ref={ref}>
      {children}
    </ul>
  )
}

export default forwardRef(BaseList)
