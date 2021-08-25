import React from 'react'
import { Link } from 'react-router-dom'

import { FacebookIcon, InstagramIcon, TwitterIcon } from '@assets/icons/Social'

const Footer = () => {
  return (
    <div className="px-4 pt-16 md:px-24 lg:px-8">
      <div className="grid gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            to="/"
            aria-label="Go home"
            title="Devsnest"
            className="inline-flex items-center">
            <img src="/favicon.png" alt="" className="w-8 h-8" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Devsnest
            </span>
          </Link>
          <div className="mt-4 lg:max-w-md">
            <p className="text-base text-gray-200">
              We aim to make young India financially self-sustainable by
              providing equal opportunity for all.
            </p>
          </div>
        </div>

        <div>
          <span className="text-base font-bold tracking-wide text-gray-100">
            Socials
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://twitter.com/devsnest_"
              className="text-gray-500 transition-colors duration-300 hover:text-purple-400">
              <TwitterIcon className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/devsnest.in/"
              className="text-gray-500 transition-colors duration-300 hover:text-purple-400">
              <InstagramIcon className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/devsnest/"
              className="text-gray-500 transition-colors duration-300 hover:text-purple-400">
              <FacebookIcon className="w-8 h-8" />
            </a>
          </div>

          <div className="flex mt-4">
            <p className="mr-1 text-gray-100">Email:</p>
            <a
              href="mailto:support@devsnest.in"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-purple-500 hover:text-purple-600">
              support@devsnest.in
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-600 lg:flex-row">
        <p className="text-sm text-gray-400">
          © Copyright 2021 Devsnest. All rights reserved.
        </p>

        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              to="/faq"
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-500">
              F.A.Q
            </Link>
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-500">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/terms-and-conditions"
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-500">
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
