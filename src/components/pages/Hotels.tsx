import { useEffect } from 'react'
import useQuery from '../../hooks/useQuery'

const Hotels = () => {
  const query = useQuery()
  const hotelQuery = query.get('q')

  console.log(hotelQuery)
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?pageNumber=1&currencyCode=USD`

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'e6d19a3739msh53938220f885404p113e5ajsn11ed19d0cb54',
          'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
        },
      }

      try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return <div>Hotels</div>
}

export default Hotels
