import { Footer, Navbar } from 'components'
import { HTMLDivProps } from 'interfaces'
import React from 'react'
import { tw } from 'twind'

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
