import { forwardRef } from 'react'
import baseStyles from '../base_css.module.css'
import cx from '../../utilities/cx'

type BaseClickAffordanceProps = React.ComponentPropsWithRef<React.ElementType<any>> & {
  /* It _must_ be given a component type to render as. */
  // eslint-disable-next-line @typescript-eslint/ban-types
  as: {}
}

function BaseClickAffordance(
  { as: TagName, children, className, ...props }: BaseClickAffordanceProps,
  ref: React.Ref<HTMLElement>
): JSX.Element {
  return (
    <TagName {...props} className={cx(className, baseStyles.base_click_affordance)} ref={ref}>
      {children}
    </TagName>
  )
}

export default forwardRef(BaseClickAffordance)
