/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'
import toast from 'react-hot-toast'

import { GoogleIcon } from '@assets/icons/Social'
import { LoginParams, useLoginMutation } from '@services/auth'
import logger from '@utils/logger'

const Login = () => {
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

  return (
    <div className="bg-white flex flex-1">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img className="h-12 w-auto" src="/favicon.png" alt="Devsnest" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8">
            <GoogleLogin
              clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
              onSuccess={onGoogleLogin}
              onFailure={() => {}}
              render={(props) => (
                <button
                  onClick={props.onClick}
                  disabled={props.disabled || isLoading}
                  className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <GoogleIcon className="h-6 w-6" />
                  <span className="ml-3">Continue with Google</span>
                </button>
              )}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  )
}

export default Login