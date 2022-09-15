import { ComponentStory } from '@storybook/react'
import BaseText from './BaseText'
import { useRef } from 'react'

export default {
  title: 'Base/BaseText',
  component: BaseText,
}

export const Basic: ComponentStory<typeof BaseText> = () => (
  <>
    <BaseText>BaseText</BaseText>
    <BaseText as="h1">BaseText</BaseText>
    <BaseText as="h2">BaseText</BaseText>
    <BaseText as="h3">BaseText</BaseText>
    <BaseText as="h4">BaseText</BaseText>
    <BaseText as="h5">BaseText</BaseText>
    <BaseText as="p">BaseText</BaseText>
    <BaseText as="article">BaseText</BaseText>
  </>
)

export const WithRef: ComponentStory<typeof BaseText> = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <BaseText as="div" ref={ref}>
      BaseText
    </BaseText>
  )
}
