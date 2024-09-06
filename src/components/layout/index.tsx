import React, { useState } from 'react'
import Navbar from './Navbar'
import { useAuth } from '../../context/authContext'
// import Sidebar from './Sidebar'
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { state } = useAuth()
  //   const [showSidebar, setShowSidebar] = useState(false)

  //   dark:bg-gray-900 dark:text-white
  return (
    <div>
      <Navbar isAuthenticated={state.isAuthenticated} />
      {/* <Sidebar showSidebar={showSidebar} /> */}
      <main>{children}</main>
    </div>
  )
}

export default Layout
