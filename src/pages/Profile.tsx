import React from 'react'

import { useUserQuery } from '@services/index'
import { logger } from '@utils/index'

const Profile = () => {
  const { data: user } = useUserQuery()

  logger('profile', user)

  return <></>
}

export default Profile
