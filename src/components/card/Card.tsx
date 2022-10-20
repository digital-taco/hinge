import React, { forwardRef } from 'react'
import styles from './Card.module.css'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'
import { Elevation, PaddingBox } from '@/components'
import { Size } from '@/types/common'

type CardProps = {
  elevation?: Size | 'none'
  outlined?: boolean
}

function Card<ComponentType extends React.ElementType = 'div'>(
  {
    className,
    elevation = 'xxs',
    outlined,
    ...props
  }: PolymorphicPropsWithRef<ComponentType, CardProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  return (
    <PaddingBox
      {...props}
      as={Elevation}
      elevation={outlined ? 'none' : elevation}
      x="md"
      y="md"
      className={cx(className, styles.card)}
      data-outlined={outlined ? true : undefined}
      ref={ref}
    />
  )
}

export default forwardRef(Card)
