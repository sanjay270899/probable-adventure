import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'routes'

import { routesMap } from './routesMap'

const Navigation = () => {
  return (
    <Switch>
      {routesMap.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  )
}

export default Navigation
