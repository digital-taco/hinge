import { ComponentStory } from '@storybook/react'
import { MarginBox } from '@/components'

export default {
  title: 'Example Library/MarginBox',
  component: MarginBox,
}

const BorderBox = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div style={{ border: 'solid 1px #eee' }}>{children}</div>
)

const Contents = (): JSX.Element => <div style={{ background: '#eee' }}>MarginBox Contents</div>

const Template: ComponentStory<typeof MarginBox> = (args) => (
  <BorderBox>
    <MarginBox {...args}>
      <Contents />
    </MarginBox>
  </BorderBox>
)

export const Basic = Template.bind({})
Basic.args = { top: 'sm', right: 'sm', bottom: 'sm', left: 'sm' }

export const AllSizes: ComponentStory<typeof MarginBox> = () => (
  <div style={{ display: 'grid', gap: 16, maxWidth: 400 }}>
    <BorderBox>
      <MarginBox top="xxl" right="xxl" bottom="xxl" left="xxl">
        <Contents />
      </MarginBox>
    </BorderBox>
    <BorderBox>
      <MarginBox top="xl" right="xl" bottom="xl" left="xl">
        <Contents />
      </MarginBox>
    </BorderBox>
    <BorderBox>
      <MarginBox top="lg" right="lg" bottom="lg" left="lg">
        <Contents />
      </MarginBox>
    </BorderBox>
    <BorderBox>
      <MarginBox top="md" right="md" bottom="md" left="md">
        <Contents />
      </MarginBox>
    </BorderBox>
    <BorderBox>
      <MarginBox top="sm" right="sm" bottom="sm" left="sm">
        <Contents />
      </MarginBox>
    </BorderBox>
    <BorderBox>
      <MarginBox top="xs" right="xs" bottom="xs" left="xs">
        <Contents />
      </MarginBox>
    </BorderBox>
    <BorderBox>
      <MarginBox top="xxs" right="xxs" bottom="xxs" left="xxs">
        <Contents />
      </MarginBox>
    </BorderBox>
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
