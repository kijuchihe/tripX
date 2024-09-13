import React, { createContext, useContext } from 'react'
import useClientLocation from '../hooks/useClientLocation'
interface ILocationState {
  location: any
  loading: boolean
}
const LocationContext = createContext<ILocationState>({
  location: null,
  loading: true,
})
const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { location, loading } = useClientLocation()
  return (
    <LocationContext.Provider value={{ location, loading }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => useContext(LocationContext)

export default LocationContextProvider
