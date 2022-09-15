import { ComponentStory } from '@storybook/react'
import ColoredContainer from './ColoredContainer'
import PaddingBox from '../padding-box/PaddingBox'

export default {
  title: 'Components/ColoredContainer',
  component: ColoredContainer,
}

const Template: ComponentStory<typeof ColoredContainer> = () => (
  <ColoredContainer as="div">
    <PaddingBox top="sm" right="sm" bottom="sm" left="sm">
      This container's background matches the theme's primary color
    </PaddingBox>
  </ColoredContainer>
)

export const Basic = Template.bind({})
