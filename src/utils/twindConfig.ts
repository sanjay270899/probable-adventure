import { setup } from 'twind'

import { withForms } from '@twind/forms'

import { colors, fontFamily } from './theme'

setup({
  preflight: withForms(),
  theme: {
    extend: {
      colors,
      fontFamily
    }
  }
})
