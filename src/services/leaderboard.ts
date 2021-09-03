import { useInfiniteQuery } from 'react-query'
import { API_ENDPOINTS } from 'utils'

import axios from 'config/axios'

export const fetchleaderboard = async (currentPage: number = 1) => {
  const response = await axios.get(
    `${API_ENDPOINTS.LEADERBOARD}?page=${currentPage}&size=20`
  )

  return response.data.data.attributes
}

export const useLeaderBoard = (currentPage: number) => {
  return useInfiniteQuery<unknown, null>(
    ['leaderboard', { currentPage }],
    () => fetchleaderboard(currentPage),
    {
      getNextPageParam: (page: unknown) =>
        page?.id > page?.count ? undefined : page?.id + 1
    }
  )
}

// console.log({ page: page })
