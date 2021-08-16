import { setup } from 'twind'

import { withForms } from '@twind/forms'

import { colors, fontFamily, outline } from './theme'

setup({
  preflight: withForms(),
  theme: {
    extend: {
      colors,
      fontFamily,
      outline
    }
  }
})
