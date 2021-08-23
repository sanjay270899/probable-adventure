import React from 'react'
import { Switch } from 'react-router-dom'

import Footer from '@components/layout/Footer'
import Navbar from '@components/layout/Navbar'
import Route from '@components/Route/Route'
import useAuth from '@hooks/useAuth'
import Index from '@pages/Index'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import Profile from '@pages/Profile'
import User from '@pages/User'

const App = () => {
  useAuth()

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-800 text-white">
      <Navbar />

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route
              exact
              path="/login"
              component={Login}
              loggedOutOnly={true}
              redirect="/profile"
            />
            <Route
              exact
              path="/profile"
              component={Profile}
              loggedInOnly={true}
            />
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
