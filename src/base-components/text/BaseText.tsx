import { forwardRef } from 'react'
import baseStyles from '../base_css.module.css'
import { PolymorphicPropsWithRef, PolymorphicRef } from '../../types/polymorphic-prop-types'

function BaseText<ComponentType extends React.ElementType = 'span'>(
  { as, className, ...props }: PolymorphicPropsWithRef<ComponentType>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'span'
  return <TagName className={`${baseStyles.text} ${className}`} {...props} ref={ref} />
}

export default forwardRef(BaseText)
