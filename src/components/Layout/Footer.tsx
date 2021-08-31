import React from 'react'
import { Link } from 'react-router-dom'

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon
} from '@assets/icons/Social'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'F.A.Q.', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Return Policy', href: '/return-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Contact Us', href: '/contact-us' }
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/devsnest',
      icon: FacebookIcon
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/devsnest.in',
      icon: InstagramIcon
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/devsnest_',
      icon: TwitterIcon
    },
    {
      name: 'GitHub',
      href: 'https://github.com/devs-nest',
      icon: GithubIcon
    }
  ]
}

const Footer = () => {
  return (
    <footer className="bg-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                to={item.href}
                className="text-base text-gray-500 hover:text-gray-300 transition-colors">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-300 transition-colors">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2021 Devsnest Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
