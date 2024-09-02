import React, { useState } from 'react'
// import useSearch from '../hooks/useSearch';
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

interface ISearchLocation {
  country: string
  id: number
  lat: number
  lon: number
  name: string
  region: string
  url: string
}

const SearchForm = ({
  category,
}: {
  category: 'flights/searchAirport' | 'hotels/searchHotels'
}) => {
  const [data, setData] = useState<ISearchLocation[]>([])
  const [query, setQuery] = useState<string>('')
  const navigate = useNavigate()

  //   const useSearch = async (query: string) => {
  //     const url = `https://tripadvisor16.p.rapidapi.com/api/v1/${category}?query=${query}`

  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': 'e6d19a3739msh53938220f885404p113e5ajsn11ed19d0cb54',
  //         'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
  //       },
  //     }

  //     try {
  //       const response = await fetch(url, options)
  //       const result = await response.json()
  //       //   console.log(await JSON.parse(response))
  //       //   const result = await response.json()
  //       setData(result.data)
  //       console.log(result.data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //     // Make API request with filtered query

  //     return data
  //   }
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    // e.target.value.length > 1 ? useSearch(e.target.value) : setData([])
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setData([])
    navigate(`/${category.split('search')[1].toLowerCase()}?q=${query}`)
    setQuery('')
  }
  return (
    <div className="relative mx-auto w-fit">
      <form
        action=""
        className="flex items-center w-[300px] md:w-[400px] gap-4 bg-gray-200 py-2 px-4 rounded-full border-2 border-transparent focus-within:border-blue-500 focus-within:border-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder={`Search ${category.split('search')[1].toLowerCase()}`}
          className="flex-1 bg-transparent border-none outline-none  placeholder:text-gray-700"
          value={query}
          onChange={handleChange}
        />
        <button aria-label="search" type="submit">
          <FiSearch />
        </button>
      </form>
      <div
        className="absolute w-full left-0 top-[50px]"
        // onBlur={() => setData([])}
        // onAbort={() => setData([])}
      >
        {data.length > 0 && (
          <div className="p-2 mt-2 bg-gray-200 rounded-xl dark:bg-gray-800">
            {data?.map((location: any) => {
              return (
                <div>
                  {/* <img src={location?.image.photo.photoSizes[0].url} alt="" /> */}
                  {location?.name}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchForm
