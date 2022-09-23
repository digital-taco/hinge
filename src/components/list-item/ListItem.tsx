import React from 'react'
import styles from './ListItem.module.css'
import { ClickAffordance } from '@/components'
import { BaseListItem } from '@/base-components'
import cx from '@/utilities/cx'

// TODO: Polymorphic-ize this

type ListItemProps = React.ComponentPropsWithRef<'li'>

/**
 *
 */
export default function ListItem({ className, onClick, ...props }: ListItemProps): JSX.Element {
  return onClick ? (
    <ClickAffordance
      as={BaseListItem}
      onClick={onClick}
      {...props}
      className={cx(className, styles.list_item)}
    />
  ) : (
    <BaseListItem {...props} className={cx(className, styles.list_item)} />
  )
}
