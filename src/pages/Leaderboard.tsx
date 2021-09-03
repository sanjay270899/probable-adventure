import Layout from 'components/Layout/Layout'
import useScroll from 'hooks/useScroll'
import React, { useEffect, useRef, useState } from 'react'
import { useLeaderBoard } from 'services/leaderboard'

const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const scrollContainerRef = useRef<HTMLTableSectionElement>(null)
  const [, , scrollTop] = useScroll(scrollContainerRef)

  const {
    data: leaderboardData,
    isSuccess,
    fetchNextPage,
    isFetchingNextPage,
    isLoading
  } = useLeaderBoard(1)

  useEffect(() => {
    const element = scrollContainerRef.current
    if (!element) return
    if (
      element.scrollHeight - element.scrollTop <= element.clientHeight + 100 &&
      currentPage < leaderboardData?.count &&
      !isFetchingNextPage
    ) {
      fetchNextPage()
      setCurrentPage(currentPage + 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollTop])

  console.log({ inTsx: leaderboardData })

  // if (isLoading) {
  //   return <div></div>
  // }
  return (
    <Layout>
      <div className="md:container md:mx-auto py-3 flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow border-b border-gray-700 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-500 rounded flex flex-col max-h-[80vh] items-stretch ">
                <thead className="bg-black">
                  <tr className="flex justify-around">
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs  text-gray-500 uppercase tracking-wider font-semibold">
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider pr-5">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody
                  ref={scrollContainerRef}
                  className="bg-gray-700 divide-y divide-gray-500 overflow-auto flex-1">
                  {leaderboardData?.pages[0]?.scoreboard &&
                    leaderboardData?.pages[0]?.scoreboard?.map(
                      (item: unknown, index: number) => (
                        <tr key={index} className="flex justify-around">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item?.rank}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {item?.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {item?.score || '0'}
                            </span>
                          </td>
                        </tr>
                      )
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Leaderboard
