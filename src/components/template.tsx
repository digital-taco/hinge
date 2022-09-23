import React, { forwardRef } from 'react'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type ComponentNameProps = {
  someProp: boolean
}

/**
 * ComponentName
 */
function ComponentName<ComponentType extends React.ElementType = 'div'>(
  { children }: PolymorphicPropsWithRef<ComponentType, ComponentNameProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  return <div ref={ref}>{children}</div>
}

export default forwardRef(ComponentName)
