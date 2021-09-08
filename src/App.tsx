import useAuth from 'hooks/useAuth'
import React from 'react'
import { Navigation } from 'routes'

const App = () => {
  useAuth()

  return <Navigation />
}

export default App
