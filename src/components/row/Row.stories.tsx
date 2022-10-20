import { ComponentStory } from '@storybook/react'
import { Row, Button, ColoredContainer, PaddingBox } from '@/components'

export default {
  title: 'Example Library/Row',
  component: Row,
}

export const Basic: ComponentStory<typeof Row> = () => {
  return (
    <Row gap="sm">
      <Button emphasis="medium">Button</Button>
      <Button emphasis="medium">Button</Button>
      <Button emphasis="medium">Button</Button>
      <Button emphasis="medium">Button</Button>
      <Button emphasis="medium">Button</Button>
    </Row>
  )
}

export const GapSizes: ComponentStory<typeof Row> = () => {
  const gapSizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']
  return (
    <>
      {gapSizes.map((size) => (
        <>
          <h3>{size}</h3>
          <Row gap={size}>
            <Button emphasis="medium">Button</Button>
            <Button emphasis="medium">Button</Button>
            <Button emphasis="medium">Button</Button>
            <Button emphasis="medium">Button</Button>
            <Button emphasis="medium">Button</Button>
          </Row>
        </>
      ))}
    </>
  )
}

export const WrappingContent: ComponentStory<typeof Row> = () => {
  return (
    <PaddingBox as={ColoredContainer} x="sm" y="sm" style={{ maxWidth: 300 }}>
      <Row gap="xxs" wrap>
        <Button emphasis="medium">Button</Button>
        <Button emphasis="medium">Button</Button>
        <Button emphasis="medium">Button</Button>
        <Button emphasis="medium">Button</Button>
        <Button emphasis="medium">Button</Button>
      </Row>
    </PaddingBox>
  )
}

export const AlignmentX: ComponentStory<typeof Row> = () => {
  const alignments: ('left' | 'center' | 'right' | undefined)[] = ['left', 'center', 'right']
  return (
    <>
      {alignments.map((size) => (
        <>
          <h3>{size}</h3>
          <PaddingBox as={ColoredContainer} x="sm" y="sm">
            <Row gap="xxs" alignX={size}>
              <Button emphasis="medium">Button</Button>
              <Button emphasis="medium">Button</Button>
              <Button emphasis="medium">Button</Button>
            </Row>
          </PaddingBox>
        </>
      ))}
    </>
  )
}

export const AlignmentY: ComponentStory<typeof Row> = () => {
  const alignments: ('top' | 'center' | 'bottom' | undefined)[] = ['top', 'center', 'bottom']
  return (
    <>
      {alignments.map((size) => (
        <>
          <h3>{size}</h3>
          <PaddingBox as={ColoredContainer} x="sm" y="sm">
            <Row gap="md" alignY={size}>
              <div>Text</div>
              <PaddingBox x="sm" y="sm">
                <Button emphasis="medium">Button</Button>
              </PaddingBox>
              <div>Text</div>
            </Row>
          </PaddingBox>
        </>
      ))}
    </>
  )
}
