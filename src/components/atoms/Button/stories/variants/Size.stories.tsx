import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentSeparator } from '../../../../../storybook/utils/ComponentSeparator'
import Button from '../../Button'
import { getButtonArgTypes } from '../buttonArgTypes'

export default {
  title: 'Components/Button/Sizes',
  component: Button,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
  argTypes: getButtonArgTypes(['children', 'size'])
} as ComponentMeta<typeof Button>

const AllTemplate: ComponentStory<typeof Button> = (args) => (
  <ComponentSeparator>
    <Button size="small" {...args}>
      Small
    </Button>
    <Button size="regular" {...args}>
      Regular
    </Button>
    <Button size="large" {...args}>
      Large
    </Button>
  </ComponentSeparator>
)

export const All = AllTemplate.bind({})

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

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
