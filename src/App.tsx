import React from 'react'
import { Switch } from 'react-router-dom'

import Route from '@components/Route/Route'
import useAuth from '@hooks/useAuth'
import Faq from '@pages/Faq'
import Index from '@pages/Index'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import Profile from '@pages/Profile'
import User from '@pages/User'

const App = () => {
  useAuth()

  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route
        exact
        path="/login"
        component={Login}
        loggedOutOnly={true}
        redirect="/profile"
      />
      <Route exact path="/profile" component={Profile} loggedInOnly={true} />
      <Route exact path="/u/:username" component={User} />
      <Route exact path="/faq" component={Faq} />

      <Route path="/" component={NotFound} />
    </Switch>
  )
}

export default App
