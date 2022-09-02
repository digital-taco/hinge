import React from 'react'
import BaseButton from './BaseButton'

export default {
  title: 'Base/Button',
  component: BaseButton,
}

export const Basic = (): JSX.Element => (
  <BaseButton onClick={() => console.log('clicked')}>BaseButton</BaseButton>
)

export const Styled = (): JSX.Element => (
  <BaseButton style={{ padding: 20, border: 'solid 1px red' }}>BaseButton</BaseButton>
)
