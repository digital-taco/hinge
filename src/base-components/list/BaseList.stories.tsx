import { useRef } from 'react'
import { ComponentStory } from '@storybook/react'
import BaseList from './BaseList'
import BaseListItem from '../list-item/BaseListItem'

export default {
  title: 'Base/List',
  component: BaseList,
}

export const UnorderedList: ComponentStory<typeof BaseList> = (args) => (
  <BaseList {...args}>
    <BaseListItem>BaseListItem 1</BaseListItem>
    <BaseListItem>BaseListItem 2</BaseListItem>
    <BaseListItem>BaseListItem 3</BaseListItem>
  </BaseList>
)

export const OrderedList: ComponentStory<typeof BaseList> = (args) => (
  <BaseList as="ol" {...args}>
    <BaseListItem>BaseListItem 1</BaseListItem>
    <BaseListItem>BaseListItem 2</BaseListItem>
    <BaseListItem>BaseListItem 3</BaseListItem>
  </BaseList>
)

export const AsNav: ComponentStory<typeof BaseList> = (args) => (
  <BaseList as="nav" {...args}>
    <BaseListItem>BaseListItem 1</BaseListItem>
    <BaseListItem>BaseListItem 2</BaseListItem>
    <BaseListItem>BaseListItem 3</BaseListItem>
  </BaseList>
)

export const WithRef: ComponentStory<typeof BaseList> = (args) => {
  const ref = useRef(null)
  return (
    <BaseList {...args} ref={ref}>
      <BaseListItem>BaseListItem 1</BaseListItem>
      <BaseListItem>BaseListItem 2</BaseListItem>
      <BaseListItem>BaseListItem 3</BaseListItem>
    </BaseList>
  )
}
