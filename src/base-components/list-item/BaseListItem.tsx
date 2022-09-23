import React, { forwardRef } from 'react'
import baseStyles from '../base_css.module.css'

type BaseListItemProps = React.ComponentPropsWithRef<'li'>

function BaseListItem(
  { children, className, ...props }: BaseListItemProps,
  ref: React.Ref<HTMLLIElement>
): JSX.Element {
  return (
    <li
      {...props}
      className={`${baseStyles.base_li} ${baseStyles.base_text} ${className}`}
      ref={ref}
    >
      {children}
    </li>
  )
}

export default forwardRef(BaseListItem)
