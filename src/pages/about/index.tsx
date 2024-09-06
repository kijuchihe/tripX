// import React from 'react'
// import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout'
import Container from '../../components/layout/Container'

const teamMembers = [
  {
    name: 'Kingsley Ihemelandu',
    role: 'CTO',
    image: '/kingsley.jpeg',
    workDone:
      'I implemented the authentication logic, did the navbar, did the home page and also contributed to the about page.',
    twitter: 'https://x.com/kijuchihe',
    portfolio: '',
  },
  {
    name: 'Alexander Falere',
    role: 'Team Lead',
    image: '/alex.jpeg',
    workDone:
      'He acted as the team lead for TripX to ensure smooth running of operations',
    twitter: '',
    portfolio: '',
  },
  {
    name: 'Bamgbose Christian',
    role: 'Designer and Front-end developer',
    image: '/cj.jpeg',
    workDone:
      'He is the Designer behind TripX, bringing a wealth of experience in travel planning and Front-end development.',
    twitter: '',
    portfolio: '',
  },
  {
    name: 'Emmanuel',
    role: '',
    image: '/emma.jpeg',
    twitter: '',
    portfolio: '',
  },
]
const AboutPage = () => {
  return (
    <Layout>
      <Container isFirst className="my-2">
        {/* <h3 className="text-4xl font-bold text-center text-black">About Us</h3> */}
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-[50%]  flex flex-col gap-8 items-center">
            <p className="w-full text-lg text-center">
              TripX is dedicated to making travel planning as easy and enjoyable
              <br />
              as the journey itself. With our innovative features and
              personalized approach, we assist travelers in discovering new
              locations, creating custom itineraries, and maximizing their
              travel experiences.
            </p>

            <Link
              to="/"
              className="block px-4 py-2 text-white rounded-full hover:bg-text bg-primary w-fit"
            >
              Learn More
            </Link>
          </div>
          <div className="w-full md:w-[50%]">
            <img src="/about.svg" alt="" />
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="mb-10 text-3xl font-bold">Meet the Team</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member) => (
            <div className="flex flex-col flex-wrap items-center mb-10">
              <img
                src={member.image}
                alt="Profile picture of Alice Johnson"
                className="w-[200px] h-[200px] rounded-sm"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="mb-2 text-gray-600">{member.role}</p>
              <p className="max-w-md text-gray-600">
                He is the Designer behind TripX, bringing a wealth of experience
                in travel planning and Front-end development.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage
