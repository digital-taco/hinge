type ImageProps = React.ComponentProps<'img'> & {
  /** Alt text is required. */
  alt: string
}

export default function Image(props: ImageProps): JSX.Element {
  return <img {...props} />
}
