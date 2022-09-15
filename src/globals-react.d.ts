// Down below we're ammending what react declares on regular dom nodes.
// We're using "declaration merging" to do so, but we need to import react for it to work.
// See https://www.typescriptlang.org/docs/handbook/declaration-merging.html
import React from 'react'

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}
