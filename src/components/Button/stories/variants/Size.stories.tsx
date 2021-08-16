import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentSeparator } from '../../../../storybook/utils/ComponentSeparator'
import Button from '../../Button'

export default {
  title: 'Components/Button/Sizes',
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
      <Button size="small">Small</Button>
      <Button size="regular">Regular</Button>
      <Button size="large">Large</Button>
    </ComponentSeparator>
  )
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small',
  size: 'small'
}

export const Regular = Template.bind({})
Regular.args = {
  children: 'Regular',
  size: 'regular'
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large',
  size: 'large'
}
