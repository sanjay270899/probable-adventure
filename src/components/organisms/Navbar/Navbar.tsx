import cx from 'classnames'
import { OnClick } from 'interfaces'
import React, { Fragment, useCallback, useMemo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLogoutMutation } from 'services/auth'
import { useLoginState } from 'state'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = {
  loggedIn: [
    { label: 'Home', to: '/' },
    { label: 'Example', to: '/example' },
    { label: 'Leaderboard', to: '/leaderboard' }
  ],
  loggedOut: [
    { label: 'Home', to: '/' },
    { label: 'Example', to: '/example' }
  ]
}

const Navbar = () => {
  const { user } = useLoginState()
  const { mutateAsync: logout } = useLogoutMutation()

  const signOut = useCallback(
    (e: OnClick<HTMLAnchorElement>) => {
      e.preventDefault()
      logout()
    },
    [logout]
  )

  const nav = useMemo(
    () => (user ? navigation.loggedIn : navigation.loggedOut),
    [user]
  )

  const profileDropdown = useMemo(
    () => [
      { label: 'Your Profile', to: '/profile' },
      { label: 'Sign Out', to: '#signOut', onClick: signOut }
    ],
    [signOut]
  )

  return (
    <Disclosure as="nav" className="shadow backdrop-filter backdrop-blur">
      {({ open }) => (
        <>
          <div className="py-1 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 text-xl font-bold">
                  Devsnest
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {nav.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        exact={true}
                        activeClassName="bg-white bg-opacity-10"
                        className="hover:bg-white hover:bg-opacity-10 text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:block space-x-2">
                {user ? (
                  <div className="ml-4 flex items-center md:ml-6">
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none">
                          <span className="sr-only">Open user menu</span>
                          <span className="ml-2 mr-4 text-white text-base">
                            {user.name}
                          </span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.image_url}
                            alt=""
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none">
                          {profileDropdown.map((item) => (
                            <Menu.Item key={item.to}>
                              {({ active }) => (
                                <NavLink
                                  to={item.to}
                                  onClick={item.onClick}
                                  className={cx(
                                    active ? 'bg-black bg-opacity-10' : '',
                                    'block px-4 py-2 text-sm text-gray-800'
                                  )}>
                                  {item.label}
                                </NavLink>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-base font-medium transition-colors">
                      Sign in
                    </NavLink>

                    <NavLink
                      to="/login"
                      className="text-gray-200 bg-purple-700 hover:bg-purple-600 hover:text-white px-4 py-2.5 rounded-md text-base font-medium transition-colors">
                      Get started
                    </NavLink>
                  </>
                )}
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  exact={true}
                  activeClassName="bg-gray-800 text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  {item.label}
                </NavLink>
              ))}
            </div>

            {user ? (
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.image_url}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400 mt-1">
                      {user.username}
                    </div>
                  </div>
                </div>

                <div className="mt-3 px-2 space-y-1">
                  {profileDropdown.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      exact={true}
                      onClick={item.onClick}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex space-x-2 mx-2 py-3 border-t border-gray-700">
                <NavLink
                  to="/login"
                  className="flex-1 text-center text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Sign in
                </NavLink>

                <NavLink
                  to="/login"
                  className="flex-1 text-center text-gray-200 shadow bg-purple-700 hover:bg-purple-600 hover:text-white px-3 py-3 rounded-md text-base font-medium transition-colors">
                  Get started
                </NavLink>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
