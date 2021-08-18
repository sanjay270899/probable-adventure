import React from 'react'
import { useParams } from 'react-router-dom'

import { useUserByUsername } from '@services/index'
import { logger } from '@utils/index'

const User = () => {
  const { username } = useParams() as { username: string }
  const { data: user } = useUserByUsername(username)

  logger('userByUsername', username, user)

  return <></>
}

export default User
