import { useMutation, useQuery } from 'react-query'

import axios from '@config/axios.config'
import { queryClient } from '@config/query.config'
import { User } from '@interfaces/state'
import { login, useAppDispatch } from '@state/index'
import { API_ENDPOINTS } from '@utils/api'

const fetchUser = async () => {
  return (await axios.get(API_ENDPOINTS.CURRENT_USER)).data
}

export type LoginParams = {
  type: 'google'
  code: string
  googleId: string
}

const fetchLogin = async (data: LoginParams) => {
  const result = await axios.post(API_ENDPOINTS.LOGIN, data)
  return {
    ...(result.data.data.attributes as User),
    authorization: result.headers.authorization
  }
}

export const useUser = () => {
  return useQuery<User, null>('auth/user', fetchUser, {
    retry: false,
    refetchOnWindowFocus: false
  })
}

export const useLoginMutation = () => {
  const dispatch = useAppDispatch()

  return useMutation(fetchLogin, {
    onSuccess: (data) => {
      dispatch(login(data))
      queryClient.invalidateQueries('auth/user')
    }
  })
}
