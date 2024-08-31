import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/search',
    // element: <WeatherResults />,
    element: <>Search results</>,
    errorElement: <ErrorBoundary />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
