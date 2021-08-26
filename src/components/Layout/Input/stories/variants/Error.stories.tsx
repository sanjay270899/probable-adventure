import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentSeparator } from '../../../../../storybook/utils/ComponentSeparator'
import Input from '../..'
import { getInputArgTypes } from '../inputArgTypes'

export default {
  title: 'Components/Input/Error',
  component: Input,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
  argTypes: getInputArgTypes(['error', 'placeholder'])
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

const AllTemplate: ComponentStory<typeof Input> = (args) => {
  return (
    <ComponentSeparator>
      <Input error={true} placeholder="Error" {...args} />
      <Input error={false} placeholder="No error" {...args} />
    </ComponentSeparator>
  )
}

export const All = AllTemplate.bind({})

export const Error = Template.bind({})
Error.args = {
  placeholder: 'Error',
  error: true
}

export const NoError = Template.bind({})
NoError.args = {
  placeholder: 'No Error',
  error: false
}
