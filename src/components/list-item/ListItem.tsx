import React, { forwardRef } from 'react'
import styles from './ListItem.module.css'
import { ClickAffordance } from '@/components'
import { BaseListItem } from '@/base-components'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

/**
 *
 */
function ListItem<ComponentType extends React.ElementType = 'li'>(
  { className, onClick, ...props }: PolymorphicPropsWithRef<ComponentType>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  return onClick ? (
    <ClickAffordance
      as={BaseListItem}
      onClick={onClick}
      {...props}
      className={cx(className, styles.list_item)}
      ref={ref}
    />
  ) : (
    <BaseListItem {...props} className={cx(className, styles.list_item)} />
  )
}

export default forwardRef(ListItem)
