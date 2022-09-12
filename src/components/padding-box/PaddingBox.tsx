import { ReactNode } from 'react'
import styles from './PaddingBox.module.css'
import cx from '../../utilities/cx'
import { Sizes } from '../../types/common'

type PaddingBoxProps = React.ComponentProps<'div'> & {
  as?: any
  className?: string
  top?: Sizes
  right?: Sizes
  bottom?: Sizes
  left?: Sizes
  children?: ReactNode
}

export default function PaddingBox({
  as: TagName = 'div',
  className,
  top,
  right,
  bottom,
  left,
  children,
  ...props
}: PaddingBoxProps): JSX.Element {
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
    >
      {children}
    </TagName>
  )
}
