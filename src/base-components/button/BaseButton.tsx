import { forwardRef } from 'react'
import BaseClickAffordance from '../click-affordance/BaseClickAffordance'
import baseStyles from '../base_css.module.css'
import cx from '../../utilities/cx'

type BaseButtonProps = React.ComponentProps<'button'>

function BaseButton(
  { className, children, ...props }: BaseButtonProps,
  ref: React.Ref<HTMLElement>
): JSX.Element {
  return (
    <BaseClickAffordance
      as="button"
      type="button"
      className={cx(className, baseStyles.base_text, baseStyles.base_button)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseClickAffordance>
  )
}

export default forwardRef(BaseButton)
