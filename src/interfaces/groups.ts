import React from 'react'

export type GroupApiResponse = {
  data: {
    id: string
    attributes: {
      name: string
      owner_id: number
      co_owner_id: number
      members_count: null | number
      student_mentor_id: null | number
      owner_name: string
      co_owner_name: string
      batch_leader_id: number
      slug: string
      created_at: string
    }
  }
}

export type Group = GroupApiResponse['data']['attributes'] & {
  id: GroupApiResponse['data']['id']
}

export type GroupMembersApiResponse = {
  data: {
    attributes: {
      batch_id: null | number
      group_id: number
      owner: null
      scrum_master: null
      student_mentor: null
      user_details: {
        avatar: string
        name: string
        username: string
      }
      user_id: number
    }
    id: string
  }[]
}

export type GroupMembers = GroupMembersApiResponse['data'][0]['attributes'][]

export type GroupTabProps = { group: Group; groupMembers: GroupMembers }

export type GroupTabs = Record<
  string,
  {
    key: string
    label: string
    component: React.FC<GroupTabProps>
  }
>
