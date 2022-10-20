import React, { forwardRef } from 'react'
import styles from './MarginBox.module.css'
import cx from '@/utilities/cx'
import { Size } from '@/types/common'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type MarginBoxProps = {
  top?: Size
  right?: Size
  bottom?: Size
  left?: Size
  x?: Size
  y?: Size
}

function MarginBox<ComponentType extends React.ElementType = 'div'>(
  {
    as,
    className,
    x,
    y,
    top,
    right,
    bottom,
    left,
    children,
    ...props
  }: PolymorphicPropsWithRef<ComponentType, MarginBoxProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return (
    <TagName
      {...props}
      className={cx(
        styles.margin_box,
        styles[`top_${top || y}`],
        styles[`right_${right || x}`],
        styles[`bottom_${bottom || y}`],
        styles[`left_${left || x}`],
        className
      )}
      ref={ref}
    >
      {children}
    </TagName>
  )
}

export default forwardRef(MarginBox)
