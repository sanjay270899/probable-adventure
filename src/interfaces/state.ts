export type User = {
  email: string
  image_url: string
  name: string
  username: string
}

export type LoginState = {
  isLoggedIn: boolean
  user: null | User
  authorization: null | string
  isLoading: boolean
}
