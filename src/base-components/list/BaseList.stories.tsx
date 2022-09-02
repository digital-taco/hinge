import { ComponentStory } from '@storybook/react'
import BaseList from './BaseList'
import BaseListItem from '../list-item/BaseListItem'

export default {
  title: 'Base/List',
  component: BaseList,
}

const Template: ComponentStory<typeof BaseList> = (args) => (
  <BaseList {...args}>
    <BaseListItem>BaseListItem 1</BaseListItem>
    <BaseListItem>BaseListItem 2</BaseListItem>
    <BaseListItem>BaseListItem 3</BaseListItem>
  </BaseList>
)

export const Basic = Template.bind({})
