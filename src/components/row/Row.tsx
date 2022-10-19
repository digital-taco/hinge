import React, { forwardRef } from 'react'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'
import cx from '@/utilities/cx'
import styles from './Row.module.css'
import { Size } from '@/types/common'

type RowProps = {
  wrap?: boolean
  gap?: Omit<Size, 'xxl'>
  alignY?: 'top' | 'center' | 'bottom'
  alignX?: 'left' | 'center' | 'right'
}

/**
 * Row is a layout component that handles laying out items horizontally. It is essentially a dumbed-down flexbox.
 */
function Row<ComponentType extends React.ElementType = 'div'>(
  {
    as,
    children,
    className,
    wrap,
    gap,
    alignY,
    alignX,
  }: PolymorphicPropsWithRef<ComponentType, RowProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return (
    <TagName
      className={cx(className, styles.row)}
      ref={ref}
      style={{ gap: gap ? `var(--global-spacer-${gap})` : undefined }}
      data-wrap={wrap ? 'true' : undefined}
      data-alignY={`${alignY}`}
      data-alignX={`${alignX}`}
    >
      {children}
    </TagName>
  )
}

export default forwardRef(Row)
