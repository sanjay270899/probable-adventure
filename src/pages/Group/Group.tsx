import cx from 'classnames'
import { Layout } from 'components'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGroup, useGroupMembers } from 'services'
import { logger } from 'utils'

import groupTabs from './groupTabs'

const GroupPage = () => {
  const { groupName, tab } = useParams() as { groupName: string; tab: string }
  const tabName = tab || 'home' // the `/` route should also open home tab

  const { data: group, isLoading: isGroupLoading } = useGroup(groupName)
  const { data: groupMembers } = useGroupMembers(group && group.id)

  logger('group', group, groupMembers)

  // group is not found if this is true
  if (!isGroupLoading && !group) {
    return <Layout>Group not found</Layout>
  }

  // the data is loading if this is true
  if (!group || !groupMembers) {
    return <Layout>Loading...</Layout>
  }

  const TabComponent = groupTabs[tabName] ? groupTabs[tabName].component : null

  return (
    <Layout>
      <div className="bg-blueGray-900 pb-48 w-full shadow" />

      <div className="px-4 sm:px-6 lg:px-8 px-8 -mt-44">
        <nav className="flex space-x-4 max-w-3xl w-full mx-auto lg:max-w-7xl pt-5">
          {Object.values(groupTabs).map((item) => (
            <Link
              key={item.key}
              to={`/g/${groupName}/${item.key}`}
              className={cx(
                tabName === item.key
                  ? 'text-white bg-opacity-10'
                  : 'bg-opacity-0',
                'text-sm font-medium rounded-md bg-white px-3 py-2 hover:bg-opacity-10'
              )}>
              {item.label}
            </Link>
          ))}
        </nav>

        <main className="pb-8 max-w-3xl w-full mx-auto lg:max-w-7xl shadow pb-28 pt-5">
          {TabComponent ? (
            <TabComponent group={group} groupMembers={groupMembers} />
          ) : (
            <>No tab</>
          )}
        </main>
      </div>
    </Layout>
  )
}

export default GroupPage
