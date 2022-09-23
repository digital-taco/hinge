import React, { forwardRef, ElementType } from 'react'
import baseStyles from '../base_css.module.css'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

function BaseClickAffordance<ComponentType extends ElementType = 'div'>(
  { as, children, className, ...props }: PolymorphicPropsWithRef<ComponentType>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return (
    <TagName {...props} className={cx(className, baseStyles.base_click_affordance)} ref={ref}>
      {children}
    </TagName>
  )
}

export default forwardRef(BaseClickAffordance)
