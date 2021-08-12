export type User = {
  authorization: string
}

export type LoginState = {
  isLoggedIn: boolean
  user: null | User
  isLoading: boolean
}
