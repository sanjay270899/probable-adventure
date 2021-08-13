import { useEffect } from 'react'

import { useUser } from '@services/auth'
import { login, logout, useAppDispatch } from '@state/index'

const useAuth = () => {
  const { data: user, isError } = useUser()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isError || !user) {
      dispatch(logout())
    } else {
      dispatch(login(user))
    }
  }, [dispatch, isError, user])
}

export default useAuth
