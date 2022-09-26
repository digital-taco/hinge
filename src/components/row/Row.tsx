import React, { forwardRef } from 'react'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'
import cx from '@/utilities/cx'
import styles from './Row.module.css'

type RowProps = {
  wrap?: boolean
  gap?: string
  alignY?: 'top' | 'center' | 'bottom'
  alignX?: 'left' | 'center' | 'right'
}

/**
 * Row
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
      data-wrap={`${wrap}`}
      data-alignY={`${alignY}`}
      data-alignX={`${alignX}`}
    >
      {children}
    </TagName>
  )
}

export default forwardRef(Row)
