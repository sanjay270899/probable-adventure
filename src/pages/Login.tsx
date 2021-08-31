/* eslint-disable react/prop-types */
import { GoogleIcon } from 'assets/icons/Social'
import bgImage from 'assets/images/login-bg.svg'
import Layout from 'components/Layout/Layout'
import { LoginParams } from 'interfaces'
import React, { useCallback } from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'
import toast from 'react-hot-toast'
import { Redirect } from 'react-router-dom'
import { useLoginMutation } from 'services'
import { useLoginState } from 'state'
import { logger } from 'utils'

const Login = () => {
  const { user } = useLoginState()
  const { mutateAsync: loginMutation, isLoading } = useLoginMutation()

  const onGoogleLogin = useCallback(
    async (data: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      try {
        const res = data as GoogleLoginResponse
        const payload: LoginParams = {
          type: 'google',
          code: res.tokenObj.id_token,
          googleId: res.profileObj.googleId
        }
        logger('onGoogleLogin', payload)
        toast.promise(loginMutation(payload), {
          loading: 'Signing you in...',
          success: "You're logged in",
          error: 'An error occurred'
        })
      } catch (e) {
        console.error(e.message)
      }
    },
    [loginMutation]
  )

  if (user) {
    return <Redirect to="/profile" />
  }

  return (
    <Layout
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white text-gray-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="font-semibold text-3xl text-center">
              Sign in to Devsnest
            </h2>

            <div className="mt-8">
              <GoogleLogin
                clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
                onSuccess={onGoogleLogin}
                onFailure={() => {}}
                render={(props) => (
                  <button
                    onClick={props.onClick}
                    disabled={props.disabled || isLoading}
                    className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 hover:border-gray-400 rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 text-sm font-medium text-gray-800 transition-colors focus:outline-none">
                    <GoogleIcon className="h-6 w-6" />
                    <span className="ml-3">Continue with Google</span>
                  </button>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
