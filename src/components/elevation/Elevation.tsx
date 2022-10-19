import React, { forwardRef } from 'react'
import styles from './Elevation.module.css'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type ElevationProps = {
  /* How high the elevation should be. */
  elevation: number
}

/**
 * Adds a box shadow to give it an elevated look.
 */
function Elevation<ComponentType extends React.ElementType = 'div'>(
  { as, className, elevation, ...props }: PolymorphicPropsWithRef<ComponentType, ElevationProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return (
    <TagName
      {...props}
      className={cx(className, styles.elevation)}
      style={{ '--elevation-height': `${elevation}px` } as React.CSSProperties}
      ref={ref}
    />
  )
}

export default forwardRef(Elevation)
