import React, { forwardRef } from 'react'
import baseStyles from '../base_css.module.css'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

function BaseList<ComponentType extends React.ElementType = 'ul'>(
  { as, children, className, ...props }: PolymorphicPropsWithRef<ComponentType>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'ul'
  return (
    <TagName {...props} className={`${baseStyles.base_ul} ${className}`} ref={ref}>
      {children}
    </TagName>
  )
}

export default forwardRef(BaseList)
