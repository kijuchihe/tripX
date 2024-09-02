import { useEffect, useState } from 'react'

/**
 * Defines the options object for the fetch request to the Travel Advisor API.
 * The options object includes the HTTP method (GET) and the necessary headers
 * for authentication and specifying the API host.
 */
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'e6d19a3739msh53938220f885404p113e5ajsn11ed19d0cb54',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
  },
}

function useAutocomplete(q: string) {
  let url = `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${q}&lang=en_US&units=km`

  const [locations, setLocations] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    async function getLocations() {
      setLoading(true)
      try {
        const response = await fetch(url, options)
        const result = await response.json()
        setLocations(result)
      } catch (error) {
        setError(error)
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getLocations()
  }, [q])
  return { locations, loading, error }
}

export default useAutocomplete
