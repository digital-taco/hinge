import React from 'react'
import styles from './ColoredContainer.module.css'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

export default function ColoredContainer<ComponentType extends React.ElementType = 'div'>(
  { as, className, children, ...props }: PolymorphicPropsWithRef<ComponentType>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return (
    <TagName {...props} className={cx(styles.solid_container_primary, className)} ref={ref}>
      {children}
    </TagName>
  )
}
