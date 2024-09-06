// import React from 'react'
import SearchForm from '../../components/features/SearchForm'
import Layout from '../../components/layout'
import { Tabs } from '../../components/ui/Tabs'
const tabs = [
  {
    header: 'Airports',
    content: (
      <>
        <SearchForm category="flights/searchAirport" />
      </>
    ),
  },
  {
    header: 'Hotels',
    content: (
      <>
        <SearchForm category="hotels/searchHotels" />
      </>
    ),
  },
  { header: 'Restaurants', content: 'forreve All' },
  { header: 'Vacation Rentals', content: 'forreve All' },
  { header: 'Cruises', content: 'cruise' },
  { header: 'Rental Cars', content: 'rent cars' },
]
const SearchPage = () => {
  return (
    <Layout>
      <Tabs tabs={tabs} />
      Restaurants
    </Layout>
  )
}

export default SearchPage
