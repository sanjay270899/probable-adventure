import { useEffect } from 'react'
import { useUserQuery } from 'services/auth'
import { logout, setLoginLoading, updateUser, useAppDispatch } from 'state'
import logger from 'utils/logger'

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
    dispatch(setLoginLoading(false))
  }, [dispatch, user])
}

export default useAuth
