import baseStyles from '../base_css.module.css'
import cx from '../../utilities/cx'

type BaseClickAffordanceProps = React.ComponentPropsWithRef<React.ElementType<any>> & {
  /* It _must_ be given a component type to render as. */
  as: any
}

export default function BaseClickAffordance({
  as: Tagname,
  children,
  className,
  ...props
}: BaseClickAffordanceProps): JSX.Element {
  return (
    <Tagname {...props} className={cx(className, baseStyles.base_click_affordance)}>
      {children}
    </Tagname>
  )
}
