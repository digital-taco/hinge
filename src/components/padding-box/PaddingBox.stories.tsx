import { ComponentStory } from '@storybook/react'
import PaddingBox from './PaddingBox'

export default {
  title: 'Components/PaddingBox',
  component: PaddingBox,
}

const Template: ComponentStory<typeof PaddingBox> = (args) => (
  <div style={{ background: 'pink', maxWidth: 400 }}>
    <PaddingBox {...args}>PaddingBox</PaddingBox>
  </div>
)

export const Basic = Template.bind({})
Basic.args = { top: 'sm', right: 'sm', bottom: 'sm', left: 'sm' }

export const AllSizes: ComponentStory<typeof PaddingBox> = () => (
  <div style={{ display: 'grid', gap: 16, maxWidth: 400 }}>
    <PaddingBox top="xxl" right="xxl" bottom="xxl" left="xxl" style={{ background: 'pink' }}>
      <div style={{ background: '#eee' }}>Contents</div>
    </PaddingBox>
    <PaddingBox top="xl" right="xl" bottom="xl" left="xl" style={{ background: 'pink' }}>
      <div style={{ background: '#eee' }}>Contents</div>
    </PaddingBox>
    <PaddingBox top="lg" right="lg" bottom="lg" left="lg" style={{ background: 'pink' }}>
      <div style={{ background: '#eee' }}>Contents</div>
    </PaddingBox>
    <PaddingBox top="md" right="md" bottom="md" left="md" style={{ background: 'pink' }}>
      <div style={{ background: '#eee' }}>Contents</div>
    </PaddingBox>
    <PaddingBox top="sm" right="sm" bottom="sm" left="sm" style={{ background: 'pink' }}>
      <div style={{ background: '#eee' }}>Contents</div>
    </PaddingBox>
    <PaddingBox top="xs" right="xs" bottom="xs" left="xs" style={{ background: 'pink' }}>
      <div style={{ background: '#eee' }}>Contents</div>
    </PaddingBox>
    <PaddingBox top="xxs" right="xxs" bottom="xxs" left="xxs" style={{ background: 'pink' }}>
      <div style={{ background: '#eee' }}>Contents</div>
    </PaddingBox>
  </div>
)
