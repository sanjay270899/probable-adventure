import Route from 'components/Route/Route'
import useAuth from 'hooks/useAuth'
import Example from 'pages/Example'
import Faq from 'pages/Faq'
import Index from 'pages/Index'
import Leaderboard from 'pages/Leaderboard'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Profile from 'pages/Profile'
import User from 'pages/User'
import React from 'react'
import { Switch } from 'react-router-dom'

const App = () => {
  useAuth()

  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} loggedOutOnly={true} />
      <Route exact path="/profile" component={Profile} loggedInOnly={true} />
      <Route exact path="/example" component={Example} />
      <Route exact path="/u/:username" component={User} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/leaderboard" component={Leaderboard} />

      <Route path="/" component={NotFound} />
    </Switch>
  )
}

export default App
