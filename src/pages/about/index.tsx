import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout'

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
      <section>
        <h3 className="text-4xl font-bold text-center text-black">
          Meet our team
        </h3>
      </section>
    </Layout>
  )
}

export default AboutPage
