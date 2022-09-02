import baseStyles from '../base_css.module.css'

type BaseTextProps = React.ComponentProps<'div'> & {
  /* It _must_ be given a component type to render as. */
  as: any
}

export default function BaseText({
  as: Tagname,
  children,
  className,
  ...props
}: BaseTextProps): JSX.Element {
  return (
    <Tagname {...props} className={`${baseStyles.text} ${className}`}>
      {children}
    </Tagname>
  )
}
