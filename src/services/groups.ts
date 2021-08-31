import { API_ENDPOINTS } from 'utils'

import axios from 'config/axios'

export const fetchGroup = async (slug: string) => {
  const response = await axios.get(`${API_ENDPOINTS.GROUPS}/${slug}`)
  return response.data.data.attributes
}

export const fetchGroupMembers = async (id: string) => {
  const response = await axios.get(
    `${API_ENDPOINTS.GROUPS}/${id}/group-members`
  )
  return response.data.data.attributes
}

export const fetchGroups = async () => {
  const response = await axios.get(`${API_ENDPOINTS.GROUPS}`)
  return response.data.data.attributes
}
