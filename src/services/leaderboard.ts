import { LeaderboardResponse } from 'interfaces'
import { useInfiniteQuery } from 'react-query'
import { API_ENDPOINTS } from 'utils'

import axios from 'config/axios'

export const fetchleaderboard = async (currentPage: number) => {
  const response = await axios.get(
    `${API_ENDPOINTS.LEADERBOARD}?page=${currentPage}&size=20`
  )
  console.log({ rsp: response.data.data.attributes })
  return response.data.data.attributes
}

export const useLeaderBoard = () => {
  return useInfiniteQuery<LeaderboardResponse, null>(
    ['leaderboard'],
    ({ pageParam = 1 }) => fetchleaderboard(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.id < lastPage.count) {
          return lastPage.id + 1
        }
        return undefined
      }
    }
  )
}
