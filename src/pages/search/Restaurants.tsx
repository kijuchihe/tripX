import React from 'react'
import Layout from '../../components/layout'
import SearchForm from '../../components/features/SearchForm'

const RestaurantResults: React.FC = () => {
  return (
    <Layout>
      <SearchForm category="restaurants" />
    </Layout>
  )
}

export default RestaurantResults
