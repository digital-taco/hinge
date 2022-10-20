import React, { forwardRef } from 'react'
import styles from './Elevation.module.css'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'
import { Size } from '@/types/common'

type ElevationProps = {
  /* How high the elevation should be. */
  elevation: Size | 'none'
}

const elevationMap = {
  none: 0,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
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
      style={{ '--elevation-height': `${elevationMap[elevation]}px` } as React.CSSProperties}
      ref={ref}
    />
  )
}

export default forwardRef(Elevation)
