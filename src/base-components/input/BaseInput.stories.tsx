import { useRef } from 'react'
import { ComponentStory } from '@storybook/react'
import BaseInput from './BaseInput'

export default {
  title: 'Base/BaseInput',
  component: BaseInput,
}

const Template: ComponentStory<typeof BaseInput> = (args) => {
  return <BaseInput {...args} />
}

export const AllTypes = (): JSX.Element => (
  <div style={{ display: 'grid', gap: 8, width: 150 }}>
    <BaseInput type="text" />
    <BaseInput type="checkbox" />
    <BaseInput type="color" />
    <BaseInput type="date" />
    <BaseInput type="datetime-local" />
    <BaseInput type="email" />
    <BaseInput type="file" />
    <BaseInput type="image" />
    <BaseInput type="month" />
    <BaseInput type="number" />
    <BaseInput type="password" />
    <BaseInput type="radio" />
    <BaseInput type="range" />
    <BaseInput type="search" />
    <BaseInput type="tel" />
    <BaseInput type="time" />
    <BaseInput type="url" />
    <BaseInput type="week" />
  </div>
)

export const Text = Template.bind({})
Text.args = { type: 'text' }

export const Checkbox = Template.bind({})
Checkbox.args = { type: 'checkbox' }

export const Color = Template.bind({})
Color.args = { type: 'color' }

export const Date = Template.bind({})
Date.args = { type: 'date' }

export const DateTimeLocal = Template.bind({})
DateTimeLocal.args = { type: 'datetime-local' }

export const Email = Template.bind({})
Email.args = { type: 'email' }

export const File = Template.bind({})
File.args = { type: 'file' }

export const Image = Template.bind({})
Image.args = {
  type: 'image',
  src: 'data:image/jpeg;base64,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',
}

export const Month = Template.bind({})
Month.args = { type: 'month' }

export const Number = Template.bind({})
Number.args = { type: 'number' }

export const Password = Template.bind({})
Password.args = { type: 'password' }

export const Radio = Template.bind({})
Radio.args = { type: 'radio' }

export const Range = Template.bind({})
Range.args = { type: 'range' }

export const Search = Template.bind({})
Search.args = { type: 'search' }

export const Telephone = Template.bind({})
Telephone.args = { type: 'tel' }

export const Time = Template.bind({})
Time.args = { type: 'time' }

export const Url = Template.bind({})
Url.args = { type: 'url' }

export const Week = Template.bind({})
Week.args = { type: 'week' }

export const WithRef = (): JSX.Element => {
  const ref = useRef(null)
  return <BaseInput type="text" ref={ref} />
}
