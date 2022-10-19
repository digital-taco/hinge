import { ComponentStory } from '@storybook/react'
import ClickAffordance from './ClickAffordance'
import Button from '../../base-components/button/BaseButton'

export default {
  title: 'Example Library/ClickAffordance',
  component: ClickAffordance,
}

const Template: ComponentStory<typeof ClickAffordance> = (args) => <ClickAffordance {...args} />

export const Basic = Template.bind({})
Basic.args = { as: Button, children: 'Click Affordance' }
