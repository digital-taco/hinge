import React, { forwardRef } from 'react'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type RowProps = {
  someProp: boolean
}

/**
 * Row
 */
function Row<ComponentType extends React.ElementType = 'div'>(
  { children }: PolymorphicPropsWithRef<ComponentType, RowProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  return <div ref={ref}>{children}</div>
}

export default forwardRef(Row)
