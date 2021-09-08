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

import { RouteProps } from './types'

export const routesMap: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: LandingPage
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    loggedOutOnly: true
  },
  {
    path: '/profile',
    exact: true,
    component: ProfilePage,
    loggedInOnly: true
  },
  {
    path: '/example',
    exact: true,
    component: ExamplePage
  },
  {
    path: '/u/:username',
    exact: true,
    component: UserPage
  },
  {
    path: '/faq',
    exact: true,
    component: FaqPage
  },
  {
    path: '/leaderboard',
    exact: true,
    component: LeaderboardPage
  },
  {
    path: '/',
    component: NotFoundPage
  }
]
