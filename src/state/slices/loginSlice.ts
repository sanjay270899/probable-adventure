import { LoginState, User } from '@interfaces/state'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppSelector } from '@state/index'

const initialState: LoginState = {
  isLoggedIn: false,
  user: null,
  isLoading: false,
  authorization: null
}

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ user: User; authorization: string }>
    ) => {
      state.user = action.payload.user
      state.authorization = action.payload.authorization
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = { ...state.user, ...action.payload }
    },
    setLoginLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export default loginSlice.reducer

export const { login, logout, setLoginLoading, updateUser } = loginSlice.actions

export const useLoginState = () => {
  return useAppSelector((state) => state.login)
}

/**
 * Use in the places where you know that user will always be logged in
 */
export const useUser = () => {
  const user = useAppSelector((state) => state.login.user)

  if (!user) throw new Error('No user is logged in')

  return user
}
