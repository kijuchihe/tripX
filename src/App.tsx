import SearchForm from './components/features/SearchForm'
import Layout from './components/layout'
import { Tabs } from './components/ui/Tabs'

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
  { 
    header: 'Restaurants', content: (
    <>
      <SearchForm category="restaurants/searchRestaurants" />
    </>
  ),
 },
  { header: 'Vacation Rentals', content: (
    <>
      <SearchForm category="Rentals/searchVacation Rentals" />
    </>
  ),
 },
  { header: 'Cruises', content: (
    <>
      <SearchForm category="Cruises/searchCruises" />
    </>
  ),
 },
  { header: 'Rental Cars', content: (
    <>
      <SearchForm category="Rentalcars/searchRental Cars" />
    </>
  ),
 },
]

function App() {
  return (
    <Layout>
      <Tabs tabs={tabs} />
    </Layout>
  )
}

export default App
