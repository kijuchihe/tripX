import React, { useEffect, useState, useCallback } from 'react'
import useQuery from '../../hooks/useQuery'
import useClientLocation from '../../hooks/useClientLocation'
import Spinner from '../../components/ui/Spinner'
import SearchForm from '../../components/features/SearchForm'
import RentalItem from './RentalItem'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout'
import Container from '../../components/layout/Container'

interface IRentalData {
  id: string
  name: string
  image_url: string
  location: string
  price_per_night: number
  rating: number
}

const Rentals: React.FC = () => {
  const query = useQuery()
  const rentalQuery = query.get('q')
  const [data, setData] = useState<IRentalData[]>([])
  const [loadingData, setLoadingData] = useState(false)
  const { location, loading: locationLoading } = useClientLocation()
  const navigate = useNavigate()

  const fetchData = useCallback(async () => {
    if (!rentalQuery) return

    setLoadingData(true)
    const url = `https://api.example.com/rentals?query=${encodeURIComponent(
      rentalQuery
    )}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer YOUR_API_KEY',
      },
    }

    try {
      const response = await fetch(url, options)
      const result = await response.json()
      setData(result.data)
    } catch (error) {
      console.error('Error fetching rental data:', error)
    } finally {
      setLoadingData(false)
    }
  }, [rentalQuery])

  const handleViewDetails = useCallback(async (id: string) => {
    navigate(`/search/rentals/${id}`)
  }, [])

  useEffect(() => {
    if (!locationLoading) {
      // fetchData()
      console.log('location', location)
    }
  }, [locationLoading, fetchData])

  return (
    <Layout>
      <Container isFirst>
        <div className="container mx-auto px-4">
          <SearchForm category="rentals" />
          <h2 className="text-2xl font-bold mb-4">Rentals</h2>
          <p>Here are the rentals</p>
          {loadingData ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              {data.map((rental) => (
                <RentalItem rental={rental} onViewDetails={handleViewDetails} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Layout>
  )
}

export default Rentals
