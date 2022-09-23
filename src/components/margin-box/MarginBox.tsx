import React from 'react'
import styles from './MarginBox.module.css'
import cx from '@/utilities/cx'
import { Sizes } from '@/types/common'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type MarginBoxProps = {
  top?: Sizes
  right?: Sizes
  bottom?: Sizes
  left?: Sizes
}

export default function MarginBox<ComponentType extends React.ElementType = 'div'>(
  {
    as,
    className,
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
        styles[`top_${top}`],
        styles[`right_${right}`],
        styles[`bottom_${bottom}`],
        styles[`left_${left}`],
        className
      )}
      ref={ref}
    >
      {children}
    </TagName>
  )
}
