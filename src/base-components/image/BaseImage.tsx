import React, { forwardRef } from 'react'

type ImageProps = React.ComponentProps<'img'> & {
  /** Alt text is required. */
  alt: string
}

function Image(props: ImageProps, ref: React.Ref<HTMLImageElement>): JSX.Element {
  return <img {...props} ref={ref} />
}

export default forwardRef(Image)
