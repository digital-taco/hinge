import { ComponentStory } from '@storybook/react'
import Elevation from './Elevation'
import PaddingBox from '@/components/padding-box/PaddingBox'

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
Basic.args = { elevation: 8 }

export const VaryingElevations: ComponentStory<typeof Elevation> = () => {
  const elevations = [2, 4, 8, 12, 16, 20, 24, 32, 48]
  return (
    <>
      {elevations.map((elevation) => (
        <>
          <Elevation elevation={elevation}>
            <PaddingBox x="lg" y="xxl">
              {elevation}px
            </PaddingBox>
          </Elevation>
          <div style={{ height: 40 }} />
        </>
      ))}
    </>
  )
}
