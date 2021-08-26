import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '..'

import { getInputArgTypes } from './inputArgTypes'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: getInputArgTypes([])
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder'
}
