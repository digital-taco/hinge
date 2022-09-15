import { forwardRef } from 'react'
import baseStyles from '../base_css.module.css'

function BaseInput(
  { children, className, ...props }: React.ComponentProps<'input'>,
  ref: React.Ref<HTMLInputElement>
): JSX.Element {
  return (
    <input
      {...props}
      className={`${baseStyles.base_input} ${baseStyles.base_text} ${className}`}
      ref={ref}
    >
      {children}
    </input>
  )
}

export default forwardRef(BaseInput)
