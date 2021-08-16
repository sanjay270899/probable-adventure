import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentSeparator } from '../../../../storybook/utils/ComponentSeparator'
import Button from '../../Button'

export default {
  title: 'Components/Button/Variants',
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
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="success">Success</Button>
    </ComponentSeparator>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  variant: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary'
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'Danger',
  variant: 'danger'
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'Warning',
  variant: 'warning'
}

export const Success = Template.bind({})
Success.args = {
  children: 'Success',
  variant: 'success'
}
