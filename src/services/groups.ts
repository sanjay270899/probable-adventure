import {
  Group,
  GroupApiResponse,
  GroupMembers,
  GroupMembersApiResponse
} from 'interfaces'
import { useQuery } from 'react-query'
import { API_ENDPOINTS } from 'utils'

import axios from 'config/axios'

export const fetchGroup = async (slug: string) => {
  const response = await axios.get(`${API_ENDPOINTS.GROUPS}/${slug}`)
  const data = response.data as GroupApiResponse
  return {
    id: data.data.id,
    ...data.data.attributes
  }
}

/**
 * Used to fetch details for a specific group with it's slug
 */
export const useGroup = (slug: string) => {
  return useQuery<Group, null>(['group', { slug }], () => fetchGroup(slug), {
    enabled: !!slug
  })
}

export const fetchGroupMembers = async (id: string) => {
  const response = await axios.get(
    `${API_ENDPOINTS.GROUPS}/${id}/group-members`
  )
  const data = response.data as GroupMembersApiResponse
  return data.data.map((item) => item.attributes)
}

/**
 * Used to fetch members of a specific group
 */
export const useGroupMembers = (groupId?: string) => {
  return useQuery<GroupMembers, null>(
    ['group-members', { groupId }],
    () => fetchGroupMembers(groupId!),
    { enabled: !!groupId }
  )
}

export const fetchGroups = async () => {
  const response = await axios.get(`${API_ENDPOINTS.GROUPS}`)
  return response.data.data.attributes
}

/**
 * Used to fetch all the groups
 */
export const useGroups = () => {
  return useQuery<unknown, null>(['groups'], fetchGroups)
}
