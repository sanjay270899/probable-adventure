import { useInfiniteQuery } from 'react-query'
import { API_ENDPOINTS } from 'utils'

import axios from 'config/axios'

export const fetchleaderboard = async (currentPage: number) => {
  const response = await axios.get(
    `${API_ENDPOINTS.LEADERBOARD}?page=${currentPage}&size=20`
  )

  return response.data.data.attributes
}

export const useLeaderBoard = () => {
  return useInfiniteQuery<unknown, null>(
    ['leaderboard'],
    ({ pageParam = 1 }) => fetchleaderboard(pageParam),
    {
      getNextPageParam: (lastPage: unknown) => {
        if (lastPage?.id < lastPage.count) {
          return parseInt(lastPage?.id) + 1
        }
        return undefined
      }
    }
  )
}
