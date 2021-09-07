import { Layout } from 'components'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useUserByUsername } from 'services'
import { logger } from 'utils'

const User = () => {
  const { username } = useParams() as { username: string }
  const { data: user } = useUserByUsername(username)

  logger('userByUsername', username, user)

  return <Layout>{JSON.stringify(user)}</Layout>
}

export default User
