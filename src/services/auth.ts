import { useMutation, useQuery } from 'react-query'

import axios from '@config/axios.config'
import { User } from '@interfaces/state'
import { API_ENDPOINTS } from '@utils/api'

const fetchUser = async () => {
  return (await axios.get(API_ENDPOINTS.CURRENT_USER)).data
}

type LoginParams = {
  type: 'google'
  code: string
  googleId: string
}

const fetchLogin = async (data: LoginParams) => {
  const result = await axios.post(API_ENDPOINTS.LOGIN, data)
  return {
    // ...data.data.attributes,
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
  return useMutation(fetchLogin)
}
