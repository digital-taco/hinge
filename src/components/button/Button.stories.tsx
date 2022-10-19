import { ComponentStory } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Example Library/Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const LowEmphasis = Template.bind({})
LowEmphasis.args = { children: 'Button', emphasis: 'low' }

export const MediumEmphasis = Template.bind({})
MediumEmphasis.args = { children: 'Button', emphasis: 'medium' }

export const HighEmphasis = Template.bind({})
HighEmphasis.args = { children: 'Button', emphasis: 'high' }
