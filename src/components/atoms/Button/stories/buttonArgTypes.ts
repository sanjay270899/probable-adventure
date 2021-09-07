export const getButtonArgTypes = (control: string[]) => ({
  variant: {
    name: 'variant',
    type: {
      type: 'string',
      required: false
    },
    description: 'Background color of Button',
    table: {
      type: {
        summary: `'primary' | 'secondary' | 'danger' | 'warning' | 'success'`
      },
      defaultValue: { summary: `'primary'` }
    },
    control: control.includes('variant')
      ? false
      : {
          type: 'radio',
          options: ['primary', 'secondary', 'danger', 'warning', 'success']
        }
  },
  size: {
    name: 'size',
    type: {
      type: 'string',
      required: false
    },
    description: 'Size of Button',
    table: {
      type: { summary: `'small' | 'regular' | 'large'` },
      defaultValue: { summary: `'regular'` }
    },
    control: control.includes('size')
      ? false
      : {
          type: 'radio',
          options: ['small', 'regular', 'large']
        }
  },
  children: {
    name: 'children',
    type: {
      type: 'string',
      required: false
    },
    description: 'Text inside button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: `''` }
    },
    control: control.includes('children')
      ? false
      : {
          type: 'text'
        }
  },
  disabled: {
    name: 'disabled',
    type: {
      type: 'boolean',
      required: false
    },
    description: 'Not clickable if true',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false }
    },
    control: control.includes('disabled')
      ? false
      : {
          type: 'boolean'
        }
  },
  onClick: {
    name: 'onClick',
    type: {
      required: false
    },
    description: 'On click handler when button is clicked',
    action: 'clicked',
    table: {
      type: { summary: 'function' },
      defaultValue: { summary: 'undefined' }
    },
    control: false
  },
  rounded: {
    name: 'rounded',
    type: {
      type: 'string',
      required: false
    },
    description: 'Roundness of Button',
    table: {
      type: { summary: `'default' | 'none' | 'full'` },
      defaultValue: { summary: `'default'` }
    },
    control: control.includes('rounded')
      ? false
      : {
          type: 'radio',
          options: ['default', 'none', 'full']
        }
  }
})
