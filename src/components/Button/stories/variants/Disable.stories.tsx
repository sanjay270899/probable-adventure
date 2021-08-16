import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentSeparator } from '../../../../storybook/utils/ComponentSeparator'
import Button from '../../Button'

export default {
  title: 'Components/Button/Disable',
  component: Button,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const All = () => {
  return (
    <ComponentSeparator>
      <Button disabled={true}>Disabled</Button>
      <Button disabled={false}>Enabled</Button>
    </ComponentSeparator>
  )
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  disabled: true
}

export const Enabled = Template.bind({})
Enabled.args = {
  children: 'Enabled',
  disabled: false
}
