import React from 'react'

export type RouteProps = {
  path: string
  component: React.ComponentType<any>
  exact?: boolean
  /**
   * If user needs to be logged in to access this page
   */
  loggedInOnly?: boolean
  /**
   * If user should only visit this page if they are logged out
   */
  loggedOutOnly?: boolean
  /**
   * The page to redirect to if loggedInOnly or loggedOutOnly specified
   */
  redirect?: string
}
