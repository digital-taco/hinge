import styles from './Button.module.css'
import textStyles from '../text.module.css'
import ClickAffordance from '../click-affordance/ClickAffordance'
import BaseButton from '../../base-components/button/BaseButton'
import cx from '../../utilities/cx'

type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  emphasis?: 'low' | 'medium' | 'high'
}

export default function Button({
  className,
  emphasis = 'low',
  ...props
}: ButtonProps): JSX.Element {
  return (
    <ClickAffordance
      as={BaseButton}
      data-button-emphasis={emphasis}
      emphasis={emphasis === 'medium' ? 'low' : emphasis}
      {...props}
      className={cx(className, styles.button, textStyles.text_emphasis, textStyles.themed_text)}
    />
  )
}
