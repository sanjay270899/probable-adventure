import { setup } from 'twind'

import { withForms } from '@twind/forms'

import theme from './theme'

setup({
  preflight: withForms(),
  mode: 'silent',
  theme: {
    extend: theme
  }
})
