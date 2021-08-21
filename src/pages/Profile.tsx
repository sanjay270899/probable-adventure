import React from 'react'

import { useUserMutation } from '@services/index'
import { useUser } from '@state/index'

const Profile = () => {
  const user = useUser()
  const { mutateAsync: updateUser } = useUserMutation()

  return (
    <div>
      <div>{user.name}</div>
      <button className="" onClick={() => updateUser({ name: 'test name' })}>
        Update name
      </button>
    </div>
  )
}

export default Profile
