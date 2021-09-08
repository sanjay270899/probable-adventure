import React from 'react'
import { Redirect, Route as RRRoute } from 'react-router-dom'
import { useLoginState } from 'state'

import { RouteProps } from './types'

const Route = ({
  path,
  component,
  exact,
  redirect,
  loggedInOnly,
  loggedOutOnly
}: RouteProps) => {
  const { isLoading, isLoggedIn } = useLoginState()

  if (loggedInOnly && isLoading) {
    return (
      <div className="flex-1">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-700"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    )
  }

  if (loggedInOnly && !isLoggedIn) {
    return <Redirect to={redirect || '/login'} />
  }

  if (loggedOutOnly && isLoggedIn) {
    return <Redirect to={redirect || '/'} />
  }

  return <RRRoute exact={exact} path={path} component={component} />
}

export default Route
