import { FaHamburger } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import SearchForm from '../features/SearchForm'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { useState } from 'react'
import { useAuth } from '../../context/authContext'
import ThemeSwitch from '../features/ThemeSwitch'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Features', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]
const userLinks = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'History', path: '/history' },
  { name: 'Settings', path: '/settings' },
]
const Navbar = ({}: { isAuthenticated: boolean }) => {
  const { state } = useAuth()
  const isAuthenticated = state.isAuthenticated
  const navigate = useNavigate()
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="h-[70px] sticky top-0 left-0 bg-white z-30 w-screen">
      <div className="container flex gap-4 justify-between items-center px-4 mx-auto w-full h-full">
        <Link to="/" className="text-3xl font-bold text-primary">
          TripX
        </Link>
        <div className="hidden md:block">
          <SearchForm category="hotels/searchHotels" />
        </div>
        <nav className="hidden md:blcok">
          <ul className="flex gap-x-4 items-center font-bold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {!isAuthenticated ? (
          <div className="hidden gap-x-4 items-center md:flex text-primary">
            <Link
              to="/login"
              className="px-4 py-2 text-white rounded bg-primary"
              role="button"
            >
              Login
            </Link>
          </div>
        ) : (
          <>
            <div className="flex relative items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="flex text-sm bg-gray-300 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                // dark:focus:ring-gray-600
                aria-controls="user-menu"
                id="user-menu-button"
                aria-expanded="false"
                onClick={() => setUserMenuOpen((prev) => !prev)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    state.user.photoUrl
                      ? state.user.photoUrl
                      : 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'
                  }
                  alt="user photo"
                />
              </button>

              <div
                className={`${
                  userMenuOpen ? 'block' : 'hidden'
                } z-50 my-4 text-base list-none bg-white rounded-lg divide-y divide-gray-100 shadow  absolute right-[20px] top-6 p-4`}
                id="user-dropdown"
                // dark:bg-gray-700 dark:divide-gray-600
              >
                <div className="px-4 py-3">
                  <span
                    className="block text-sm text-gray-900"
                    // dark:text-white
                  >
                    {state.user.displayName
                      ? state.user.displayName
                      : 'Anonymous'}
                  </span>
                  <span
                    className="block text-sm text-gray-500 truncate"
                    // dark:text-gray-400
                  >
                    {state.user!.email}
                  </span>
                </div>
                {/* Divider */}
                <div className="bg-gray-400 h-[2px] w-full my-1"></div>
                <ul
                  className="flex flex-col items-center py-2"
                  aria-labelledby="user-menu-button"
                >
                  {userLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        //    dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  {/* Divider */}
                  <div className="bg-gray-400 h-[1px] w-full my-1"></div>

                  <li className="flex gap-2 items-center">
                    Theme: <ThemeSwitch />
                  </li>
                  {/* Divider */}
                  <div className="bg-gray-400 h-[1px] w-full my-1"></div>
                  <li>
                    <button
                      onClick={async () => {
                        await signOut(auth)
                        navigate('/login')
                      }}
                      type="button"
                      className="px-4 py-2 text-white rounded bg-primary"
                      role="button"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        <div className="block relative md:hidden">
          {isAuthenticated && (
            <div className="hidden relative items-center space-x-3  md:order-2 md:space-x-0 rtl:space-x-reverse md:flex">
              <button
                type="button"
                className="flex text-sm bg-gray-300 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                // dark:focus:ring-gray-600
                aria-controls="user-menu"
                id="user-menu-button"
                aria-expanded="false"
                onClick={() => setUserMenuOpen((prev) => !prev)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    state.user.photoUrl
                      ? state.user.photoUrl
                      : 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'
                  }
                  alt="user photo"
                />
              </button>

              <div
                className={`${
                  userMenuOpen ? 'block' : 'hidden'
                } z-50 my-4 text-base list-none bg-white rounded-lg divide-y divide-gray-100 shadow  absolute right-[20px] top-6 p-4 `}
                id="user-dropdown"
                // dark:bg-gray-700 dark:divide-gray-600
              >
                <div className="px-4 py-3">
                  <span
                    className="block text-sm text-gray-900"
                    // dark:text-white
                  >
                    {state.user.displayName
                      ? state.user.displayName
                      : 'Anonymous'}
                  </span>
                  <span
                    className="block text-sm text-gray-500 truncate"
                    // dark:text-gray-400
                  >
                    {state.user!.email}
                  </span>
                </div>
                {/* Divider */}
                <div className="bg-gray-400 h-[2px] w-full my-1"></div>
                <ul
                  className="flex flex-col items-center py-2"
                  aria-labelledby="user-menu-button"
                >
                  {userLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        //    dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  {/* Divider */}
                  <div className="bg-gray-400 h-[1px] w-full my-1"></div>

                  <li className="flex gap-2 items-center">
                    Theme: <ThemeSwitch />
                  </li>
                  {/* Divider */}
                  <div className="bg-gray-400 h-[1px] w-full my-1"></div>

                  <li>
                    <button
                      onClick={async () => {
                        await signOut(auth)
                        navigate('/login')
                      }}
                      type="button"
                      className="px-4 py-2 text-white rounded bg-primary"
                      role="button"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              setMobileNavOpen((prev) => !prev)
            }}
          >
            <FaHamburger className="text-3xl" />
          </button>
          <div
            className={`${
              mobileNavOpen ? 'block' : 'hidden'
            } z-50 my-4 text-base list-none bg-white rounded-lg divide-y divide-gray-100 shadow  absolute right-[20px] top-6 p-4 min-w-[150px]`}
            id="user-dropdown"
            // dark:bg-gray-700 dark:divide-gray-600
          >
            <ul
              className="flex flex-col items-center py-2"
              aria-labelledby="user-menu-button"
            >
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    //    dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {!isAuthenticated && (
                <div className="flex gap-x-4 items-center text-primary">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-white rounded bg-primary"
                    role="button"
                  >
                    Login
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
