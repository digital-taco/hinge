import { ComponentStory } from '@storybook/react'
import MarginBox from './MarginBox'

export default {
  title: 'Example Library/MarginBox',
  component: MarginBox,
}

const Template: ComponentStory<typeof MarginBox> = (args) => (
  <div style={{ border: 'solid 1px black' }}>
    <MarginBox {...args}>
      <div style={{ background: '#eee' }}>MarginBox</div>
    </MarginBox>
  </div>
)

export const Basic = Template.bind({})
Basic.args = { top: 'sm', right: 'sm', bottom: 'sm', left: 'sm' }

export const AllSizes: ComponentStory<typeof MarginBox> = () => (
  <div style={{ display: 'grid', gap: 16, maxWidth: 400 }}>
    <div style={{ border: 'solid 1px #eee' }}>
      <MarginBox top="xxl" right="xxl" bottom="xxl" left="xxl">
        <div style={{ background: '#eee' }}>Contents</div>
      </MarginBox>
    </div>
    <div style={{ border: 'solid 1px #eee' }}>
      <MarginBox top="xl" right="xl" bottom="xl" left="xl">
        <div style={{ background: '#eee' }}>Contents</div>
      </MarginBox>
    </div>
    <div style={{ border: 'solid 1px #eee' }}>
      <MarginBox top="lg" right="lg" bottom="lg" left="lg">
        <div style={{ background: '#eee' }}>Contents</div>
      </MarginBox>
    </div>
    <div style={{ border: 'solid 1px #eee' }}>
      <MarginBox top="md" right="md" bottom="md" left="md">
        <div style={{ background: '#eee' }}>Contents</div>
      </MarginBox>
    </div>
    <div style={{ border: 'solid 1px #eee' }}>
      <MarginBox top="sm" right="sm" bottom="sm" left="sm">
        <div style={{ background: '#eee' }}>Contents</div>
      </MarginBox>
    </div>
    <div style={{ border: 'solid 1px #eee' }}>
      <MarginBox top="xs" right="xs" bottom="xs" left="xs">
        <div style={{ background: '#eee' }}>Contents</div>
      </MarginBox>
    </div>
    <div style={{ border: 'solid 1px #eee' }}>
      <MarginBox top="xxs" right="xxs" bottom="xxs" left="xxs">
        <div style={{ background: '#eee' }}>Contents</div>
      </MarginBox>
    </div>
  </div>
)

export const OverlappingMargin: ComponentStory<typeof MarginBox> = () => (
  <div style={{ border: 'solid 1px #eee' }}>
    <MarginBox top="xxl" right="xxl" bottom="xxl" left="xxl">
      <div style={{ background: '#eee' }}>
        The bottom margin for this MarginBox overlaps with the MarginBox below it.
      </div>
    </MarginBox>
    <MarginBox top="xxl" right="xxl" bottom="xxl" left="xxl">
      <div style={{ background: '#eee' }}>
        The top margin for this MarginBox overlaps with the MarginBox above it.
      </div>
    </MarginBox>
  </div>
)
