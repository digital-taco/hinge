import { ReactNode, ComponentProps } from 'react'
import styles from './ColoredContainer.module.css'
import cx from '../../utilities/cx'

type ColoredContainerProps = ComponentProps<'div'> & {
  as?: any
  className?: string
  children?: ReactNode
}

export default function ColoredContainer({
  as: TagName = 'div',
  className,
  children,
  ...props
}: ColoredContainerProps): JSX.Element {
  return (
    <TagName {...props} className={cx(styles.solid_container_primary, className)}>
      {children}
    </TagName>
  )
}
