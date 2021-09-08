import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'routes'

import { routesMap } from './routesMap'

const Navigation = () => {
  return (
    <Switch>
      {routesMap &&
        routesMap.map((route, index) => <Route {...route} key={index} />)}
    </Switch>
  )
}

export default Navigation
