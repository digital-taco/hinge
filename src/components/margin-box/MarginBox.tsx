import React, { ReactNode } from 'react'
import styles from './MarginBox.module.css'
import cx from '@/utilities/cx'
import { Sizes } from '@/types/common'

type MarginBoxProps = React.ComponentProps<'div'> & {
  as?: any
  className?: string
  top?: Sizes
  right?: Sizes
  bottom?: Sizes
  left?: Sizes
  children?: ReactNode
}

export default function MarginBox({
  as: TagName = 'div',
  className,
  top,
  right,
  bottom,
  left,
  children,
  ...props
}: MarginBoxProps): JSX.Element {
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
    >
      {children}
    </TagName>
  )
}
