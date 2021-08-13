import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Footer from '@components/layout/Footer'
import Navbar from '@components/layout/Navbar'
import useAuth from '@hooks/useAuth'
import Index from '@pages/Index'
import NotFound from '@pages/NotFound'

const App = () => {
  useAuth()

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Switch>
          <Route exact path="/" component={Index} />

          <Route path="/" component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </div>
  )
}

export default App
