import  { useEffect, useState } from 'react'
import useQuery from '../../hooks/useQuery'

const Airport = () => {
  const query = useQuery()
  const hotelQuery = query.get('q')
  const [airports, setAirports] = useState<any[]>([])
  const [images, setImages] = useState<any[]>([])

  console.log(hotelQuery)
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport/?query=${hotelQuery}`

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
        console.log('response', response)
        setAirports(result.data)
        console.log(result.data)

        // for (const _ of result.data) {
        //   const response = await fetch(
        //     'https://random.imagecdn.app/v1/image?width=150&height=150'
        //   )
        //   const result = await response.json()
        //   setImages((images) => [...images, result])
        // }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="container p-4">
      <h1 className="text-4xl font-bold mb-4">Airports</h1>
      {!airports ? (
        <>No airports</>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {airports.map((airport) => (
            <figure className="bg-gray-300 w-[300px] min-h-[300px] h-fit rounded-lg p-2 flex flex-col">
              <img
                src={images[Math.floor(Math.random() * images.length)]}
                className="rounded-lg mb-4"
                alt=""
              />
              <h3 className="text-2xl">{airport.details.name}</h3>
              <br />
              {airport.details.address}
              <br />
              Country: {airport.details.grandparent_name}
              <br />
              <button
                type="button"
                className="bg-green-600 block p-2 text-white w-full rounded-lg justify-self-end"
              >
                Check it out
              </button>
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}

export default Airport
