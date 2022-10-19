import React, { forwardRef } from 'react'
import styles from './Card.module.css'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type CardProps = {
  /* Description. */
  changeme?: string
}

/**
 * Description
 */
function Card<ComponentType extends React.ElementType = 'div'>(
  { children, className, ...props }: PolymorphicPropsWithRef<ComponentType, CardProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  return (
    <div {...props} className={cx(className, styles.changeme)} ref={ref}>
      {children}
    </div>
  )
}

export default forwardRef(Card)
