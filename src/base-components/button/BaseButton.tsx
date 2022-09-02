import BaseClickAffordance from '../click-affordance/BaseClickAffordance'
import baseStyles from '../base_css.module.css'
import cx from '../../utilities/cx'

type BaseButtonProps = React.ComponentProps<'button'>

export default function BaseButton({
  className,
  children,
  ...props
}: BaseButtonProps): JSX.Element {
  return (
    <BaseClickAffordance
      as="button"
      type="button"
      className={cx(className, baseStyles.base_text, baseStyles.base_button)}
      {...props}
    >
      {children}
    </BaseClickAffordance>
  )
}
