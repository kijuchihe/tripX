import { useCallback, useEffect, useState } from 'react'
import useQuery from '../../hooks/useQuery'
import useClientLocation from '../../hooks/useClientLocation'
import Spinner from '../../components/ui/Spinner'
import SearchForm from '../../components/features/SearchForm'

export interface IHotelData {
  dest_id: string
  search_type: string
  dest_type: string
  latitude: number
  label: string
  cc1: string
  country: string
  region: string
  image_url: string
  hotels: number
  name: string
  roundtrip: string
  city_ufi: number
  city_name: string
  lc: string
  type: string
  longitude: number
  nr_hotels: number
}

const Hotels: React.FC = () => {
  const query = useQuery()
  const hotelQuery = query.get('q')
  const [data, setData] = useState<IHotelData[]>([])
  const [loadingData, setLoadingData] = useState(false)
  const { loading } = useClientLocation()

  const fetchData = useCallback(async () => {
    if (!hotelQuery) return
    setLoadingData(true)
    const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${hotelQuery}`
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'e6d19a3739msh53938220f885404p113e5ajsn11ed19d0cb54',
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
      },
    }

    try {
      const response = await fetch(url, options)
      const result: {
        status: boolean
        message: string
        timestamp: string
        data: IHotelData[]
      } = await response.json()
      setData(result.data)

      console.log(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingData(false)
    }
  }, [hotelQuery])
  // console.log(hotelQuery)
  useEffect(() => {
    if (!loading) {
      fetchData()
    }
  }, [loading, fetchData])
  return (
    <div>
      <h2>Hotels</h2>
      <SearchForm category="hotels" />
      <>
        {loadingData ? (
          <>
            <Spinner />
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((hotel, index) => {
              return (
                <div key={index}>
                  <figure>
                    <img
                      src={hotel.image_url}
                      alt={hotel.city_name}
                      className="w-[300px]"
                    />
                    <figcaption>
                      <h3>{hotel.region}</h3>
                      <button className="text-white bg-primary">
                        {'Check it out'}
                      </button>
                    </figcaption>
                  </figure>
                  {hotel.region}
                </div>
              )
            })}
          </div>
        )}
      </>
    </div>
  )
}

export default Hotels
