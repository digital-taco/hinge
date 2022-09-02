import textStyles from '../text.module.css'
import cx from '../../utilities/cx'

type ThemeTextProps = React.ComponentPropsWithRef<any> & {
  /* It _must_ be given a component type to render as. */
  as: any
  /* If true, the text will have slightly less visual emphasis. */
  secondary?: boolean
}

/**
 *
 */
export default function ThemeText({
  as: TagName,
  className,
  secondary = false,
  ...props
}: ThemeTextProps): JSX.Element {
  return (
    <TagName
      data-text-emphasis={secondary ? 'secondary' : undefined}
      {...props}
      className={cx(className, textStyles.themed_text, textStyles.text_emphasis)}
    />
  )
}
