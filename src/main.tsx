import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/pages/About.tsx'
import Home from './components/pages/HomePage.tsx'
import HomePage from './pages/home/index.tsx'
import AboutPage from './pages/about/index.tsx'
import SearchPage from './pages/search/index.tsx'
import LoginPage from './pages/(auth)/login/index.tsx'
import { AuthProvider } from './context/authContext.tsx'
import RegisterPage from './pages/(auth)/register/index.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Restaurants from './pages/Restaurants/Restaurants.tsx'
import Hotels from './pages/search/Hotels.tsx'
import Rentals from './pages/search/Rentals.tsx'
import RestaurantResults from './pages/search/Restaurants.tsx'

const ErrorBoundary = () => {
  return (
    <div>
      <h1>Oops!</h1>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorBoundary />,
  },

  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },

  {
    path: '/about',
    element: <AboutPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/cj/about',
    element: <About />,
    errorElement: <ErrorBoundary />,
  },

  {
    path: '/search',
    element: <SearchPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/search/hotels',
    element: <Hotels />,
  },
  {
    path: '/search/rentals',
    element: <Rentals />,
  },
  {
    path: '/search/restaurants',
    element: <RestaurantResults />,
  },

  {
    path: '/about',
    element: <AboutPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
)
