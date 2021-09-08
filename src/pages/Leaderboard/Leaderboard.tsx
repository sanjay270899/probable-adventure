import { Layout } from 'components'
import useScroll from 'hooks/useScroll'
import React, { useEffect, useRef } from 'react'
import { useLeaderBoard } from 'services/leaderboard'

const Leaderboard = () => {
  const scrollContainerRef = useRef<HTMLTableSectionElement>(null)
  const { top: scrollTop } = useScroll(scrollContainerRef)

  const {
    data: leaderboardData,
    fetchNextPage,
    isLoading,
    isFetchingNextPage
  } = useLeaderBoard()

  useEffect(() => {
    const element = scrollContainerRef.current
    if (!element) return
    if (
      element.scrollHeight - element.scrollTop <=
      element.clientHeight + 100
    ) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollTop])

  if (isLoading && !leaderboardData) {
    return (
      <Layout>
        <div className=" flex justify-center items-center align-middle w-screen ">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-100"></div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto pb-3 pt-9 flex flex-col rounded-t-xl rounded-b-xl">
        <div className="overflow-x-auto rounded-t-xl rounded-b-xl">
          <div className="align-middle inline-block min-w-full rounded-t-xl rounded-b-xl">
            <div className="shadow border-b border-gray-700 rounded-t-xl rounded-b-xl">
              <table className="min-w-full divide-y divide-gray-500 rounded flex flex-col max-h-[80vh] items-stretch pb-2 bg-elevation-6">
                <thead className="bg-elevation-1 rounded-t-xl">
                  <tr className="flex justify-between py-4 ">
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-lg  text-gray-500 uppercase tracking-wider font-bold">
                      <div className="pl-6 ">Rank</div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider font-bold">
                      Name
                    </th>

                    <th
                      scope="col"
                      className="mr-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider font-bold">
                      <div className="pr-6">Score</div>
                    </th>
                  </tr>
                </thead>
                {leaderboardData && (
                  <tbody
                    ref={scrollContainerRef}
                    className="divide-y divide-gray-700 overflow-auto flex-1 rounded-b-xl">
                    {leaderboardData.pages.length > 0 && (
                      <tr className="flex justify-between z-50 sticky top-0 py-2 bg-elevation-3 rounded-lg shadow-lg">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex justify-center items-center align-middle w-full pl-6">
                            <div className="text-lg text-content-medium font-semibold">
                              {leaderboardData.pages[0].user.rank}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="flex justify-center items-center align-middle w-full">
                                <div className="flex text-lg font-semibold">
                                  <div className="pr-2 text-content-medium">
                                    {leaderboardData.pages[0].user.name}
                                  </div>

                                  <div className="text-sm rounded-full py-1 px-2 bg-primary-dark text-content-medium">
                                    You
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex justify-center items-center align-middle w-full pr-6">
                            <span className="px-2 inline-flex text-lg leading-7 font-semibold rounded-full bg-green-100 text-green-600">
                              {leaderboardData.pages[0].user.score || '0'}
                            </span>
                          </div>
                        </td>
                      </tr>
                    )}

                    {leaderboardData.pages.map((page) =>
                      page.scoreboard.map((item) => (
                        <tr
                          key={item.name}
                          className="flex justify-between bg-elevation-6 rounded-b-xl">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex justify-center items-center align-middle w-full pl-6">
                              <div className="text-lg text-content-medium font-semibold">
                                {item.rank}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="flex justify-center items-center align-middle w-full">
                                  <div className="text-lg font-semibold text-content-medium">
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex justify-center items-center align-middle w-full pr-6">
                              <span className="px-2 inline-flex text-lg leading-7 font-semibold rounded-full bg-green-100 text-green-600">
                                {item.score}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}

                    {isFetchingNextPage && (
                      <tr className="flex justify-between bg-elevation-6 rounded-b-xl">
                        <td></td>

                        <td className="flex justify-center ">
                          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-100"></div>
                        </td>
                        <td></td>
                      </tr>
                    )}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Leaderboard
