/* eslint-disable react/display-name */
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
    description: 'Join the course and start your journey with us today',
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
    href: '/faqs',
    description: 'Get answers for the most asked questions',
    icon: BookmarkAltIcon
  }
]

const NotFound = () => {
  return (
    <div className="bg-white">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
              Helpful links
            </h2>
            <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
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
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
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
                className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound
