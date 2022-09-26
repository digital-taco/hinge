import React, { forwardRef, ElementType } from 'react'
import { BaseClickAffordance } from '@/base-components'
import baseStyles from '../base_css.module.css'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

// TODO: This is not polymorphic and it should be. Typescript gets upset for some reason.

function BaseButton<ComponentType extends ElementType = 'button'>(
  { className, children, ...props }: PolymorphicPropsWithRef<ComponentType>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  return (
    <BaseClickAffordance
      as="button"
      type="button"
      className={cx(className, baseStyles.base_text, baseStyles.base_button)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseClickAffordance>
  )
}

export default forwardRef(BaseButton)
