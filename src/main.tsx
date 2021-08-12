import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'twind/shim'
import './utils/twindConfig'

import App from './App'
import { store } from './state'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
