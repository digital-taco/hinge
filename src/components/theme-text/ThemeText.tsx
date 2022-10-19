import React, { forwardRef } from 'react'
import textStyles from '../text.module.css'
import cx from '@/utilities/cx'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type ThemeTextProps = {
  /* If true, the text will have slightly less visual emphasis. */
  secondary?: boolean
}

/**
 *
 */
function ThemeText<ComponentType extends React.ElementType = 'div'>(
  {
    as,
    className,
    secondary = false,
    ...props
  }: PolymorphicPropsWithRef<ComponentType, ThemeTextProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return (
    <TagName
      data-text-emphasis={secondary ? 'secondary' : undefined}
      {...props}
      className={cx(className, textStyles.themed_text, textStyles.text_emphasis)}
      ref={ref}
    />
  )
}

export default forwardRef(ThemeText)
