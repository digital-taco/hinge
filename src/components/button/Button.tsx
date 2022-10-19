import React, { forwardRef } from 'react'
import styles from './Button.module.css'
import textStyles from '../text.module.css'
import { ClickAffordance } from '@/components'
import { BaseButton } from '@/base-components'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type ButtonProps = {
  emphasis?: 'low' | 'medium' | 'high'
}

function Button<ComponentType extends React.ElementType = 'button'>(
  {
    className,
    emphasis = 'low',
    children,
    ...props
  }: PolymorphicPropsWithRef<ComponentType, ButtonProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  return (
    <ClickAffordance
      as={BaseButton}
      data-button-emphasis={emphasis}
      emphasis={emphasis === 'medium' ? 'low' : emphasis}
      {...props}
      className={cx(className, styles.button, textStyles.text_emphasis, textStyles.themed_text)}
      ref={ref}
    >
      {children}
    </ClickAffordance>
  )
}

export default forwardRef(Button)
