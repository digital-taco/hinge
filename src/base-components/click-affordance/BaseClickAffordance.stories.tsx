import { useRef } from 'react'
import { ComponentStory } from '@storybook/react'
import BaseClickAffordance from './BaseClickAffordance'

export default {
  title: 'Base/ClickAffordance',
  component: BaseClickAffordance,
}

export const Basic: ComponentStory<typeof BaseClickAffordance> = (args) => (
  <BaseClickAffordance {...args} as="button">
    Click Affordance
  </BaseClickAffordance>
)

export const WithRef = (): JSX.Element => {
  const ref = useRef(null)
  return (
    <BaseClickAffordance as="button" ref={ref}>
      BaseClickAffordance
    </BaseClickAffordance>
  )
}
