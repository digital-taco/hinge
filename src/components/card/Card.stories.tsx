import { ComponentStory } from '@storybook/react'
import Card from './Card'

export default {
  title: 'Components/Card',
  component: Card,
}

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Basic = Template.bind({})
Basic.args = { children: 'Children' }
