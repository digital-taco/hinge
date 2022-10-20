import { ComponentStory } from '@storybook/react'
import { ColoredContainer, PaddingBox } from '@/components'

export default {
  title: 'Example Library/ColoredContainer',
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
