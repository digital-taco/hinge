import React, { forwardRef } from 'react'
import styles from './PaddingBox.module.css'
import cx from '@/utilities/cx'
import { Size } from '@/types/common'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type PaddingBoxProps = {
  top?: Size
  right?: Size
  bottom?: Size
  left?: Size
  x?: Size
  y?: Size
}

function PaddingBox<ComponentType extends React.ElementType = 'div'>(
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
  }: PolymorphicPropsWithRef<ComponentType, PaddingBoxProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return (
    <TagName
      {...props}
      className={cx(
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

export default forwardRef(PaddingBox)
