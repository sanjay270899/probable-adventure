import React from 'react'

import Layout from '@components/Layout/Layout'
import { useUserMutation } from '@services/index'
import { useUser } from '@state/index'

const Profile = () => {
  const user = useUser()
  const { mutateAsync: updateUser } = useUserMutation()

  return (
    <Layout>
      <div>
        <div>{user.name}</div>
        <button className="" onClick={() => updateUser({ name: 'test name' })}>
          Update name
        </button>
      </div>
    </Layout>
  )
}

export default Profile
