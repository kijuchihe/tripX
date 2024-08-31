import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  //   dark:bg-gray-900 dark:text-white
  return (
    <main>
      <Navbar setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <div className="p-4 sm:ml-64  min-h-screen  bg-white text-black  mt-[60px]">
        {children}
      </div>
    </main>
  )
}

export default Layout
