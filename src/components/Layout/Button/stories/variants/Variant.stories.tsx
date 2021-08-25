import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentSeparator } from '../../../../../storybook/utils/ComponentSeparator'
import Button from '../../Button'
import { getButtonArgTypes } from '../buttonArgTypes'

export default {
  title: 'Components/Button/Variants',
  component: Button,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
  argTypes: getButtonArgTypes(['children', 'variant'])
} as ComponentMeta<typeof Button>

const AllTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <ComponentSeparator>
      <Button variant="primary" {...args}>
        Primary
      </Button>
      <Button variant="secondary" {...args}>
        Secondary
      </Button>
      <Button variant="danger" {...args}>
        Danger
      </Button>
      <Button variant="warning" {...args}>
        Warning
      </Button>
      <Button variant="success" {...args}>
        Success
      </Button>
      <Button variant="transparent" {...args}>
        Success
      </Button>
    </ComponentSeparator>
  )
}

export const All = AllTemplate.bind({})

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

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

export const Transparent = Template.bind({})
Transparent.args = {
  children: 'Transparent',
  variant: 'transparent'
}
