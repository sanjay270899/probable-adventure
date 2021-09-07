import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '..'

import { getButtonArgTypes } from './buttonArgTypes'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: getButtonArgTypes([])
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button'
}
