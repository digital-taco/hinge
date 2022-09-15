import { forwardRef } from 'react'
import baseStyles from '../base_css.module.css'

type BaseTextProps = React.ComponentProps<'div'> & {
  /* It _must_ be given a component type to render as. */
  as: any
}

function BaseText(
  { as: Tagname, children, className, ...props }: BaseTextProps,
  ref: React.Ref<HTMLElement>
): JSX.Element {
  return (
    <Tagname {...props} className={`${baseStyles.text} ${className}`} ref={ref}>
      {children}
    </Tagname>
  )
}

export default forwardRef(BaseText)
