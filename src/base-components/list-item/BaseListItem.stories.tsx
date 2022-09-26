import { ComponentStory } from '@storybook/react'
import BaseListItem from './BaseListItem'
import BaseList from '../list/BaseList'
import { useRef } from 'react'

export default {
  title: 'Base/BaseListItem',
  component: BaseListItem,
}

export const Basic: ComponentStory<typeof BaseListItem> = (args) => (
  <BaseList>
    <BaseListItem {...args}>ListItem 1</BaseListItem>
    <BaseListItem {...args}>ListItem 2</BaseListItem>
    <BaseListItem {...args}>ListItem 3</BaseListItem>
  </BaseList>
)

export const WithRef: ComponentStory<typeof BaseListItem> = () => {
  const ref = useRef(null)
  return (
    <BaseList>
      <BaseListItem ref={ref}>ListItem 1</BaseListItem>
    </BaseList>
  )
}
