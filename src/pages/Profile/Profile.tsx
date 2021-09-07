import { Layout } from 'components'
import React from 'react'
import { useUserMutation } from 'services'
import { useUser } from 'state'

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
