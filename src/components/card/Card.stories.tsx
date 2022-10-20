import { ComponentStory } from '@storybook/react'
import { Card } from '@/components'

export default {
  title: 'Components/Card',
  component: Card,
}

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Basic = Template.bind({})
Basic.args = { children: 'Card Contents' }

export const Outlined = Template.bind({})
Outlined.args = { children: 'Outlined Card', outlined: true }
