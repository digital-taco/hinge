import { ComponentStory } from '@storybook/react'
import { ThemeText } from '@/components'

export default {
  title: 'Example Library/ThemeText',
  component: ThemeText,
}

export const AllEmphases: ComponentStory<typeof ThemeText> = () => (
  <div style={{ display: 'grid', gap: 20 }}>
    <ThemeText as="div">[Primary] This text is colored to match the theme.</ThemeText>
    <ThemeText as="div" secondary>
      [Secondary] This text is colored to match the theme, but with less emphasis.
    </ThemeText>
  </div>
)
