import 'twind/shim'
import '../src/utils/twindConfig'
import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  docs: {
    theme: themes.dark
  }
}

export const decorators = [
  (Story) => (
    <div className="flex justify-center">
      <Story />
    </div>
  )
]
