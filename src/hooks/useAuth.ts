import { useEffect } from 'react'

import { useUserQuery } from '@services/auth'
import { logout, updateUser, useAppDispatch } from '@state/index'
import logger from '@utils/logger'

const useAuth = () => {
  const { data: user } = useUserQuery()
  const dispatch = useAppDispatch()

  useEffect(() => {
    logger('useAuth', { user })
    if (!user) {
      dispatch(logout())
    } else {
      dispatch(updateUser(user))
    }
  }, [dispatch, user])
}

export default useAuth
