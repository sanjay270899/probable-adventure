import React from 'react'
import { tw } from 'twind'

import { HTMLDivProps } from '@interfaces/index'

import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[]
  hideFooter?: boolean
  hideNavbar?: boolean
} & HTMLDivProps

const Layout = ({
  children,
  hideFooter,
  hideNavbar,
  className,
  ...props
}: LayoutProps) => {
  return (
    <div
      className={tw('font-sans bg-gray-900 text-white', className)}
      {...props}>
      <div className="flex flex-col min-h-screen">
        {!hideNavbar && <Navbar />}

        <div className="flex-1 flex">{children}</div>
      </div>

      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
