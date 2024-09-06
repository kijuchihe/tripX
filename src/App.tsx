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
  { header: 'Restaurants', content: 'forreve All' },
  { header: 'Vacation Rentals', content: 'forreve All' },
  { header: 'Cruises', content: 'cruise' },
  { header: 'Rental Cars', content: 'rent cars' },
]

function App() {
  return (
    <Layout>
      {/* <section className="text-center align-middle h-[calc(100vh-70px)] flex items-center justify-center flex-col gap-16 p-4">
        <div>
          <h2 className="text-4xl font-bold">Plan your Journey</h2>
          <h2 className="text-4xl font-bold text-primary">
            Explore new Destinations
          </h2>
          <h2 className="text-4xl font-bold">Time-Saving Plans</h2>
        </div>
        <p>
          Discover your next adventure easily with TripX, your ultimae travel
          companion.
        </p>
        <div>
          <Link
            to="/search"
            className="px-4 py-2 text-white rounded bg-primary"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="p-4">
        <h2 className="py-8 text-4xl font-bold text-center">Our Feaatures</h2>
        <p className="text-text max-w-[500px] mx-auto text-center">
          We offer a comprehensive set of features designed <br />
          to make travel planning effortless and enjoyable. <br />
          Discover inspiring destinations, customize your <br />
          itinerary, and connect with fellow travelers.
        </p>
        <div className="max-w-[500px] grid grid-cols-2 mx-auto my-16 gap-4">
          {features.map((feature, index) => (
            <div className="text-center min-h-24" key={index}>
              <h3 className="text-2xl font-bold w-[80%] mx-auto">
                {feature.title}
              </h3>
              <p className="my-4 text-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-primary">Portfolio</p>
        <h2></h2>
      </section> */}
      <Tabs tabs={tabs} />
      Restaurants
    </Layout>
  )
}

export default App
