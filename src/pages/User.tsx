import React from 'react'
import { useParams } from 'react-router-dom'

import Layout from '@components/Layout/Layout'
import { useUserByUsername } from '@services/index'
import { logger } from '@utils/index'

const User = () => {
  const { username } = useParams() as { username: string }
  const { data: user } = useUserByUsername(username)

  logger('userByUsername', username, user)

  return <Layout>{JSON.stringify(user)}</Layout>
}

export default User
