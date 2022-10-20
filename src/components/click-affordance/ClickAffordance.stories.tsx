import { ComponentStory } from '@storybook/react'
import { ClickAffordance } from '@/components'
import { BaseButton } from '@/base-components'

export default {
  title: 'Components/ClickAffordance',
  component: ClickAffordance,
}

const Template: ComponentStory<typeof ClickAffordance> = (args) => <ClickAffordance {...args} />

export const Basic = Template.bind({})
Basic.args = { as: BaseButton, children: 'Click Affordance' }
