// import React from 'react'
import { useEffect, useState } from 'react'
import SearchForm from '../../components/features/SearchForm'
import Layout from '../../components/layout'
import Container from '../../components/layout/Container'
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

const fetchHotels = async () => {
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/nearby-places?locale=en-gb&hotel_id=1676161';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e6d19a3739msh53938220f885404p113e5ajsn11ed19d0cb54',
		'x-rapidapi-host': 'booking-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result
} catch (error) {
	console.error(error);
}
}
const SearchPage = () => {
    const [data, setData] = useState<any>({
        surroundings: {},
        landmarks: {},
        transport: {}
    })
    useEffect(()=>{
        fetchHotels().then((data)=>{
            setData(data)
        })
    }, [])
  return (
    <Layout>
      <Container isFirst>
        <Tabs tabs={tabs} />
        {data.landmarks.closest.map(({landmark_name}:any)=> (
            <div>{landmark_name}</div>
        ))}
      </Container>
    </Layout>
  )
}

export default SearchPage
