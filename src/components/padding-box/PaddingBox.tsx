import React, { forwardRef } from 'react'
import styles from './PaddingBox.module.css'
import cx from '@/utilities/cx'
import { Sizes } from '@/types/common'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type PaddingBoxProps = {
  top?: Sizes
  right?: Sizes
  bottom?: Sizes
  left?: Sizes
}

function PaddingBox<ComponentType extends React.ElementType = 'div'>(
  {
    as,
    className,
    top,
    right,
    bottom,
    left,
    children,
    ...props
  }: PolymorphicPropsWithRef<ComponentType, PaddingBoxProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return (
    <TagName
      {...props}
      className={cx(
        styles.padding_box,
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

export default forwardRef(PaddingBox)
