import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentSeparator } from '../../../../../storybook/utils/ComponentSeparator'
import Button from '../../Button'
import { getButtonArgTypes } from '../buttonArgTypes'

export default {
  title: 'Components/Button/Disable',
  component: Button,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true }
    }
  },
  argTypes: getButtonArgTypes(['children', 'disabled'])
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

const AllTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <ComponentSeparator>
      <Button disabled={true} {...args}>
        Disabled
      </Button>
      <Button disabled={false} {...args}>
        Enabled
      </Button>
    </ComponentSeparator>
  )
}

export const All = AllTemplate.bind({})

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
