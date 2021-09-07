import useAuth from 'hooks/useAuth'
import {
  ExamplePage,
  FaqPage,
  LandingPage,
  LeaderboardPage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  UserPage
} from 'pages'
import React from 'react'
import { Switch } from 'react-router-dom'
import Route from 'routes'

const App = () => {
  useAuth()

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} loggedOutOnly={true} />
      <Route
        exact
        path="/profile"
        component={ProfilePage}
        loggedInOnly={true}
      />
      <Route exact path="/example" component={ExamplePage} />
      <Route exact path="/u/:username" component={UserPage} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/leaderboard" component={LeaderboardPage} />

      <Route path="/" component={NotFoundPage} />
    </Switch>
  )
}

export default App
