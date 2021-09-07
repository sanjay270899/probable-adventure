export const getInputArgTypes = (control: string[]) => ({
  placeholder: {
    name: 'placeholder',
    type: {
      type: 'string',
      required: false
    },
    description: 'Placeholder for Button',
    table: {
      type: {
        summary: `string`
      },
      defaultValue: { summary: `''` }
    },
    control: control.includes('placeholder')
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
    description: 'Read only if true',
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
  error: {
    name: 'error',
    type: {
      type: 'boolean',
      required: false
    },
    description: 'Red border if true',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false }
    },
    control: control.includes('error')
      ? false
      : {
          type: 'boolean'
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
  }
})
