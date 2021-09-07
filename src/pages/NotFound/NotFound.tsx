/* eslint-disable react/display-name */
import { Layout } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'

import {
  AcademicCapIcon,
  BookmarkAltIcon,
  BookOpenIcon
} from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

const links = [
  {
    title: 'Join the course',
    href: '/#join',
    description: 'Start your journey in tech with us today',
    icon: AcademicCapIcon
  },
  {
    title: 'Our Curriculum',
    href: '/#curriculum',
    description: "Learn about what we'll be teaching you",
    icon: BookOpenIcon
  },
  {
    title: 'FAQs',
    href: '/faq',
    description: 'Get answers for the most asked questions',
    icon: BookmarkAltIcon
  }
]

const NotFound = () => {
  return (
    <Layout>
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-100 tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-gray-400 tracking-wide uppercase">
              Helpful links
            </h2>
            <ul className="mt-4 border-t border-b border-gray-700 divide-y divide-gray-700">
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative py-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
                      <link.icon
                        className="h-6 w-6 text-indigo-700"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-gray-200">
                      <span className="rounded-sm">
                        <Link to={link.href} className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </Link>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/"
                className="text-base font-medium text-indigo-500 hover:text-indigo-400">
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NotFound
