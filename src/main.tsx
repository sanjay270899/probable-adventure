import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'twind/shim'
import './utils/twindConfig'

import { queryClient } from './config/query.config'
import App from './App'
import { store } from './state'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          {!import.meta.env.PROD && (
            <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
          )}
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
