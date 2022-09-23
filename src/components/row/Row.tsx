import React, { forwardRef } from 'react'
import { PolymorphicPropsWithRef, PolymorphicRef } from '@/types/polymorphic-prop-types'

type RowProps = {
  someProp: boolean
}

/**
 * Row
 */
function Row<ComponentType extends React.ElementType = 'div'>(
  { as, children }: PolymorphicPropsWithRef<ComponentType, RowProps>,
  ref: PolymorphicRef<ComponentType>
): JSX.Element {
  const TagName = as || 'div'
  return <TagName ref={ref}>{children}</TagName>
}

export default forwardRef(Row)
