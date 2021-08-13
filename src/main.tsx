import React from 'react'
import ReactDOM from 'react-dom'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { queryClient } from '@config/query.config'
import { store } from '@state/index'

import 'twind/shim'
import '@utils/twindConfig'

import App from './App'

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
