import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentSeparator } from '../../../../../storybook/utils/ComponentSeparator'
import Input from '../..'
import { getInputArgTypes } from '../inputArgTypes'

export default {
  title: 'Components/Input/Disable',
  component: Input,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
  argTypes: getInputArgTypes(['disabled', 'placeholder'])
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

const AllTemplate: ComponentStory<typeof Input> = (args) => {
  return (
    <ComponentSeparator>
      <Input disabled={true} placeholder="Disabled" {...args} />
      <Input disabled={false} placeholder="Enabled" {...args} />
    </ComponentSeparator>
  )
}

export const All = AllTemplate.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Disabled',
  disabled: true
}

export const Enabled = Template.bind({})
Enabled.args = {
  placeholder: 'Enabled',
  disabled: false
}
