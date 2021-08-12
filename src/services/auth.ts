import { useQuery } from 'react-query'

import axios from '../config/axios.config'
import { User } from '../interfaces/state'
import { API_ENDPOINTS } from '../utils/api'

const fetchUser = async () => {
  return (await axios.get(API_ENDPOINTS.CURRENT_USER)).data
}

export const useUser = () => {
  return useQuery<User, null>('auth/user', fetchUser, {
    retry: false,
    refetchOnWindowFocus: false
  })
}
