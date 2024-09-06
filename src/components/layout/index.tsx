import React, { useState } from 'react'
import Navbar from './Navbar'
// import Sidebar from './Sidebar'
const Layout = ({ children }: { children: React.ReactNode }) => {
  //   const [showSidebar, setShowSidebar] = useState(false)

  //   dark:bg-gray-900 dark:text-white
  return (
    <div>
      <Navbar />
      {/* <Sidebar showSidebar={showSidebar} /> */}
      <main>{children}</main>
    </div>
  )
}

export default Layout
