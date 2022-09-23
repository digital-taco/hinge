import React, { forwardRef } from 'react'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type ComponentNameProps = {
  someProp: boolean
}

/**
 * ComponentName
 */
function ComponentName<ComponentType extends React.ElementType = 'div'>(
  { as, children }: PolymorphicPropsWithRef<ComponentType, ComponentNameProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return <TagName ref={ref}>{children}</TagName>
}

export default forwardRef(ComponentName)
