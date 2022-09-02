import styles from './ListItem.module.css'
import ClickAffordance from '../click-affordance/ClickAffordance'
import BaseListItem from '../../base-components/list-item/BaseListItem'
import cx from '../../utilities/cx'

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
