import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Footer from '@components/layout/Footer'
import Navbar from '@components/layout/Navbar'
import useAuth from '@hooks/useAuth'
import Index from '@pages/Index'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import Profile from '@pages/Profile'
import User from '@pages/User'
import * as Sentry from '@sentry/react'

if (import.meta.env.VITE_SENTRY_URL) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_URL
  })
}

const App = () => {
  useAuth()

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-800">
      <Navbar />

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/u/:username" component={User} />

            <Route path="/" component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
