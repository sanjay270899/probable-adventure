import { useMutation, useQuery } from 'react-query'

import axios from '@config/axios.config'
import { queryClient } from '@config/query.config'
import { LoginParams } from '@interfaces/services'
import { User } from '@interfaces/state'
import { login, useAppDispatch } from '@state/index'
import { API_ENDPOINTS } from '@utils/api'

export const fetchUser = async () => {
  const response = await axios.get(API_ENDPOINTS.CURRENT_USER)
  return response.data.data.attributes
}

/**
 * Used to get the latest user from server
 */
export const useUserQuery = () => {
  return useQuery<User, null>('auth/user', fetchUser, {
    retry: false,
    refetchOnWindowFocus: false
  })
}

export const fetchLogin = async (data: LoginParams) => {
  const response = await axios.post(API_ENDPOINTS.LOGIN, data)
  return {
    user: response.data.data.attributes as User,
    authorization: response.headers.authorization
  }
}

/**
 * Used to log in the user, updates local state and user query automatically
 */
export const useLoginMutation = () => {
  const dispatch = useAppDispatch()

  return useMutation(fetchLogin, {
    onSuccess: (data) => {
      dispatch(login(data))
      queryClient.invalidateQueries('auth/user')
    }
  })
}

export const fetchDiscordConnectWithToken = async (botToken: string) => {
  const response = await axios.post(API_ENDPOINTS.CONNECT_DISCORD, {
    data: {
      attributes: {
        bot_token: botToken
      },
      type: 'users'
    }
  })
  return response.data
}

/**
 * Used to connect discord of current user using token from bot,
 * updates user query automatically
 */
export const useDiscordTokenConnectMutation = () => {
  return useMutation(fetchDiscordConnectWithToken, {
    onSuccess: () => {
      queryClient.invalidateQueries('auth/user')
    }
  })
}

export const fetchDiscordConnect = async (code: string) => {
  const response = await axios.post(API_ENDPOINTS.CONNECT_DISCORD, {
    code
  })
  return response.data
}

/**
 * Used to connect discord of current user using token from bot,
 * updates user query automatically
 */

export const useDiscordConnectMutation = () => {
  return useMutation(fetchDiscordConnect, {
    onSuccess: () => {
      queryClient.invalidateQueries('auth/user')
    }
  })
}

export const fetchUserByUsername = async (username: string) => {
  const response = await axios.get(
    `${API_ENDPOINTS.USER}/${username}/get_by_username`
  )
  return response.data.data.attributes
}

/**
 * Used to get the user details with a username, won't be fetched until username is present
 */
export const useUserByUsername = (username: string) => {
  return useQuery<User, null>(
    ['user', { username }],
    () => fetchUserByUsername(username),
    {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: !!username
    }
  )
}
