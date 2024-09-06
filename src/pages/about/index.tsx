// import React from 'react'
// import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout'
import Container from '../../components/layout/Container'

const AboutPage = () => {
  return (
    <Layout>
      <section className="w-[550px] mx-auto text-center flex flex-col items-center justify-center gap-12 h-[calc(100vh-70px)] text-text text-xl">
        <h3 className="text-4xl font-bold text-center text-black">About Us</h3>
        <p className="mt-8 text-lg">
          TripX is dedicated to making travel planning as easy and enjoyable
          <br />
          as the journey itself. With our innovative features and personalized{' '}
          <br />
          approach, we assist travelers in discovering new locations, creating{' '}
          <br />
          custom itineraries, and maximizing their travel experiences.
        </p>
        <ul>
          <li>
            <p>
              Tailored travel recommendations based on individual
              <br />
              interests and preferences.
            </p>
          </li>
          <li>
            <p>
              Seamless integration of your travel schedule to maximize
              <br />
              convenience and time management.
            </p>
          </li>
          <li>
            <p>
              An extensive library of inspiring destinations and practical
              <br />
              travel tips.
            </p>
          </li>
        </ul>
        <p>
          Choosing TripX means choosing a reliable, feature-rich platform <br />
          that ensures every aspect of your trip is thoughtfully planned. Join{' '}
          <br />
          our community of explorers and start your next adventure with <br />
          confidence
        </p>
        <Link
          to="#"
          className="block px-4 py-2 rounded-full text-text-light hover:bg-text bg-text w-fit"
        >
          Learn More
        </Link>
      </section>
      <Container>
        <h2 className="mb-10 text-3xl font-bold">Meet the Team</h2>
        <div className="flex items-center">
          <div className="flex flex-col items-center mb-10">
            <img
              src="https://placehold.co/200x200"
              alt="Profile picture of Alice Johnson"
              className="mb-4"
            />
            <h3 className="text-xl font-bold">Bamgbose Christian(CJ)</h3>
            <p className="mb-2 text-gray-600">
              Designer and Front-end developer
            </p>
            <p className="max-w-md text-gray-600">
              He is the Designer behind TripX, bringing a wealth of experience
              in travel planning and Front-end development.
            </p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <img
              src="https://placehold.co/200x200"
              alt="Profile picture of Bob Smith"
              className="mb-4"
            />
            <h3 className="text-xl font-bold">Alexander Falere(Ghost)</h3>
            <p className="mb-2 text-gray-600">Chief Technology Officer</p>
            <p className="max-w-md text-gray-600">
              He oversees all technical aspects of TripX, ensuring the platform
              runs smoothly and efficiently.
            </p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <img
              src="https://placehold.co/200x200"
              alt="Profile picture of Carol White"
              className="mb-4"
            />
            <h3 className="text-xl font-bold">insert name</h3>
            <p className="mb-2 text-gray-600">insert Role</p>
            <p className="max-w-md text-gray-600">
              insert name is responsible for spreading the word about TripX,
              building our brand, and connecting with our users.
            </p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <img
              src="https://placehold.co/200x200"
              alt="Profile picture of Dave Brown"
              className="mb-4"
            />
            <h3 className="text-xl font-bold">insert name</h3>
            <p className="mb-2 text-gray-600">COO</p>
            <p className="max-w-md text-gray-600">
              insert name ensures that the day-to-day operations at TripX run
              smoothly and efficiently.
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage
