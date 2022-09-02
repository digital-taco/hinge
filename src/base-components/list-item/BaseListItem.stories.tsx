import { ComponentStory } from '@storybook/react'
import BaseListItem from './BaseListItem'
import BaseList from '../list/BaseList'

export default {
  title: 'Base/ListItem',
  component: BaseListItem,
}

const Template: ComponentStory<typeof BaseListItem> = (args) => (
  <BaseList>
    <BaseListItem {...args}>ListItem 1</BaseListItem>
    <BaseListItem {...args}>ListItem 2</BaseListItem>
    <BaseListItem {...args}>ListItem 3</BaseListItem>
  </BaseList>
)

export const Basic = Template.bind({})
