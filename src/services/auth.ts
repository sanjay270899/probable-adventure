import { useQuery } from 'react-query'

import axios from '../config/axios.config'

const fetchUser = async () => {
  return (await axios.get('/api/v1/users')).data
}

export const useUser = () => {
  return useQuery('auth/user', fetchUser)
}
