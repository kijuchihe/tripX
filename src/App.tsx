import SearchForm from './components/features/SearchForm'
import Layout from './components/layout'
import { Tabs } from './components/ui/Tabs'

const tabs = [
  { header: 'Search All', content: 'Search All' },
  { header: 'Hotels', content: 'Another All' },

  { header: 'Bars', content: 'forreve All' },
]

function App() {
  return (
    <Layout>
      <SearchForm />
      <Tabs tabs={tabs} />
    </Layout>
  )
}

export default App
