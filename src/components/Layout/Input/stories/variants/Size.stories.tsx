import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentSeparator } from '../../../../../storybook/utils/ComponentSeparator'
import Input from '../..'
import { getInputArgTypes } from '../inputArgTypes'

export default {
  title: 'Components/Input/Size',
  component: Input,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
  argTypes: getInputArgTypes(['size', 'placeholder'])
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

const AllTemplate: ComponentStory<typeof Input> = (args) => {
  return (
    <ComponentSeparator>
      <Input textSize="small" placeholder="Small" {...args} />
      <Input textSize="regular" placeholder="Regular" {...args} />
      <Input textSize="large" placeholder="Large" {...args} />
    </ComponentSeparator>
  )
}

export const All = AllTemplate.bind({})

export const Small = Template.bind({})
Small.args = {
  placeholder: 'Small',
  textSize: 'small'
}

export const Regular = Template.bind({})
Regular.args = {
  placeholder: 'Regular',
  textSize: 'regular'
}

export const Large = Template.bind({})
Large.args = {
  placeholder: 'Large',
  textSize: 'large'
}
