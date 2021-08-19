import mixpanel from 'mixpanel-browser'
import React from 'react'
import ReactDOM from 'react-dom'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { queryClient } from '@config/query.config'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { store } from '@state/index'

import 'twind/shim'
import '@utils/twindConfig'

import App from './App'

if (import.meta.env.VITE_SENTRY_URL) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_URL,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0.8
  })
}

if (import.meta.env.VITE_MIXPANEL_TOKEN) {
  mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN)
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <Toaster position="top-right" />
          {!import.meta.env.PROD && (
            <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
          )}
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
