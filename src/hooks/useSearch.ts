import { useEffect, useState } from 'react'

const useSearch = ({ query }: { query: string }) => {
  const [data, setData] = useState<any>(null)
  const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${query}`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e6d19a3739msh53938220f885404p113e5ajsn11ed19d0cb54',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    },
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setData(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  })

  // Make API request with filtered query

  return data
}

export default useSearch
