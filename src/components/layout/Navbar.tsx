import { FaHamburger } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import SearchForm from '../features/SearchForm'

const Navbar = () => {
  return (
    <header className="h-[70px] sticky top-0 left-0 bg-white z-30 w-screen">
      <div className="container flex gap-4 justify-between items-center px-4 mx-auto w-full h-full">
        <Link to="/" className="text-3xl font-bold text-primary">
          TripX
        </Link>
        <SearchForm category="hotels/searchHotels" />
        <nav>
          <ul className="flex gap-x-4 items-center font-bold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Features</NavLink>
            </li>
            <li>
              <NavLink to="/">Services</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="block md:hidden">
          <FaHamburger className="text-3xl" />
        </div>
        <div className="flex gap-x-4 items-center text-primary">
          <Link
            to="/login"
            className="px-4 py-2 text-white rounded bg-primary"
            role="button"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
