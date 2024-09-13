import SearchForm from '../../components/features/SearchForm'
import Layout from '../../components/layout'
import Container from '../../components/layout/Container'
import { Tabs } from '../../components/ui/Tabs'

const tabs = [
  {
    header: 'Hotels',
    content: (
      <>
        <SearchForm category="hotels" />
      </>
    ),
  },
  {
    header: 'Flights',
    content: (
      <>
        <SearchForm category="flights" />
      </>
    ),
  },

  { header: 'Restaurants', content: 'forreve All' },

  {
    header: 'Activities',
    content: (
      <>
        <SearchForm category="activities" />
      </>
    ),
  },
  {
    header: 'Rentals',
    content: (
      <>
        <SearchForm category="rentals" />
      </>
    ),
  },
  {
    header: 'Cars',
    content: (
      <>
        <SearchForm category="cars" />
      </>
    ),
  },
]

const SearchPage = () => {
  return (
    <Layout>
      <Container isFirst>
        <Tabs tabs={tabs} />
      </Container>
    </Layout>
  )
}

export default SearchPage
