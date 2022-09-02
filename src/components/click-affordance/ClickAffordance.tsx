import styles from './ClickAffordance.module.css'
import BaseClickAffordance from '../../base-components/click-affordance/BaseClickAffordance'
import cx from '../../utilities/cx'

type ClickAffordanceProps = React.ComponentPropsWithRef<typeof BaseClickAffordance> & {
  /* It _must_ be given a component type to render as. */
  as: any
  /* Determines the visual emphasis given to the click affordnace element. */
  emphasis: 'low' | 'high'
}

/**
 * ClickAffordance acts as a wrapper for any clickable element. It provides
 * hover, active, and focus styling. It is themeable through css variables.
 */
export default function ClickAffordance({
  className,
  emphasis = 'low',
  ...props
}: ClickAffordanceProps): JSX.Element {
  return (
    <BaseClickAffordance
      {...props}
      data-emphasis={emphasis}
      className={cx(className, styles.click_affordance, styles.theme)}
    />
  )
}
