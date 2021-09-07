import { Button, Layout } from 'components'
import React from 'react'
import toast from 'react-hot-toast'
import { useQuestions } from 'services'
import { useLoginState } from 'state'

const Example = () => {
  /**
   * this is used to get current user from login state this provides the user object directly
   * and assumes user is logged in, it will throw an error if user is logged out
   */
  // const user = useUser()
  /**
   * If you need user somewhere they might not be logged in eg. this page use it from `useLoginState`
   */
  const { user } = useLoginState()
  /**
   * And now if we want to use some api we use the useQuery wrappers from services
   * This will automatically manage all our state for loading, caching, error etc.
   * This `refetch` function will reload the data, and it returns a promise
   * Also this caches the data for some amount of time so be sure to refetch it if you want the latest copy
   */
  const { data: questions, isLoading, isError, refetch } = useQuestions()

  const refetchWithNotification = () => {
    /**
     * We have a special, toast.promise which will show a loading notification till the promise loads
     * and if it throws and error it will show error otherwise shows success
     * we can also pass an async function here
     */
    toast.promise(refetch(), {
      loading: "We're loading fresh hot data",
      success: 'Yay!! We did it',
      error: "hump, i'm not gonna load"
    })
  }

  return (
    /**
     * The outer layout of the app to be added around each page, contains footer and navbar
     * allows for easy modification of layout on page by page basis
     */
    <Layout>
      {/**
       * Content of the page will be inside it, this is inside a flex box
       * with column direction (see in Layout.tsx)
       * so to set full height we do flex-1
       */}
      <div className="flex-1 flex flex-col items-center justify-evenly mx-2">
        {user && (
          // Show user details if a user is logged in
          // go ahead and type `user.` and see the magic of ts
          <div className="shadow bg-gray-800 rounded w-full md:w-96 p-4 flex">
            <img className="w-16 rounded-full" src={user.image_url} alt="" />
            <div className="flex-1 ml-5">
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <p>{user.username}</p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center mx-2">
          <div className="flex flex-col items-center">
            {/**
             * First we check if query is loading, if so we show loading
             * Then we check if any error occurred, id so show the error things
             * And if it is not loading and there is no error this means we have our data
             * so just go ahead and use it
             */}
            {isLoading ? (
              <div>Loading .... </div>
            ) : isError ? (
              <div>Some error occurred. Are you logged in?</div>
            ) : (
              <div>
                First question: {questions && questions[0].attributes.name}
              </div>
            )}

            <Button
              className="mt-4 disabled:opacity-25"
              onClick={refetchWithNotification}
              disabled={isLoading}>
              Refetch data
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Example
