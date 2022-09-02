import { ComponentStory } from '@storybook/react'
import BaseClickAffordance from './BaseClickAffordance'

export default {
  title: 'Base/ClickAffordance',
  component: BaseClickAffordance,
}

const Template: ComponentStory<typeof BaseClickAffordance> = (args) => (
  <BaseClickAffordance {...args} as="button">
    Click Affordance
  </BaseClickAffordance>
)

export const Basic = Template.bind({})
