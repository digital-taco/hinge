import { useState } from 'react'
import { ComponentStory } from '@storybook/react'
import { BaseList } from '../../base-components'
import ListItem from './ListItem'

export default {
  title: 'Components/ListItem',
  component: ListItem,
}

const Template: ComponentStory<typeof ListItem> = (args) => (
  <BaseList>
    <ListItem {...args} />
  </BaseList>
)

export const Basic = Template.bind({})
Basic.args = { children: 'List Item' }

export const InteractiveListItem: ComponentStory<typeof ListItem> = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      Count: {count}
      <br />
      <br />
      <BaseList>
        <ListItem onClick={() => setCount((prev) => prev + 1)}>Add 1</ListItem>
        <ListItem onClick={() => setCount((prev) => prev + 2)}>Add 2</ListItem>
        <ListItem onClick={() => setCount((prev) => prev + 3)}>Add 3</ListItem>
        <ListItem onClick={() => setCount((prev) => prev + 4)}>Add 4</ListItem>
      </BaseList>
    </>
  )
}
