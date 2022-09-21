import { forwardRef } from 'react'
import styles from './ClickAffordance.module.css'
import BaseClickAffordance from '../../base-components/click-affordance/BaseClickAffordance'
import cx from '../../utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '../../types/polymorphic-prop-types'

type ClickAffordanceProps = {
  /* Determines the visual emphasis given to the click affordnace element. */
  emphasis: 'low' | 'high'
}

/**
 * ClickAffordance acts as a wrapper for any clickable element. It provides
 * hover, active, and focus styling. It is themeable through css variables.
 */
function ClickAffordance<ComponentType extends React.ElementType = 'div'>(
  {
    className,
    emphasis = 'low',
    ...props
  }: PolymorphicPropsWithRef<ComponentType, ClickAffordanceProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  return (
    <BaseClickAffordance
      {...props}
      data-emphasis={emphasis}
      className={cx(className, styles.click_affordance, styles.theme)}
      ref={ref}
    />
  )
}

export default forwardRef(ClickAffordance)
