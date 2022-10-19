import { ComponentStory } from '@storybook/react'
import Elevation from './Elevation'
import PaddingBox from '@/components/padding-box/PaddingBox'
import { Size } from '@/types/common'

export default {
  title: 'Components/Elevation',
  component: Elevation,
}

const Template: ComponentStory<typeof Elevation> = (args) => (
  <Elevation {...args}>
    <PaddingBox x="md" y="md">
      Elevated Contents
    </PaddingBox>
  </Elevation>
)

export const Basic = Template.bind({})
Basic.args = { elevation: 'sm' }

export const AllElevations: ComponentStory<typeof Elevation> = () => {
  const elevations = ['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as Size[]
  return (
    <>
      {elevations.map((elevation) => (
        <>
          <Elevation elevation={elevation}>
            <PaddingBox x="lg" y="xl">
              {elevation}
            </PaddingBox>
          </Elevation>
          <div style={{ height: 40 }} />
        </>
      ))}
    </>
  )
}
