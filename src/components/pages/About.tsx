const AboutPage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-shapes">
      <header
        className="w-full flex justify-center items-center p-4
         bg-gray-200 border-b border-gray-200 dark:bg-gray-900
         dark:border-gray-700 h-[60px] shadow-md"
      >
        <div className="text-4xl font-bold text-yellow-500">TripX</div>
      </header>
      <main className="flex flex-col items-center mt-10 w-full">
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">About TripX</h1>
          <p className="mb-4 text-lg">
            Are you tired of endless hours of research to plan your next trip?
            Look no further than TripX, your ultimate travel companion. Our
            website is designed to help travelers like you discover new
            destinations, plan your itinerary, and make the most of your time on
            the road.
          </p>
          <a href="#team" className="text-blue-500 underline">
            Meet the Team
          </a>
        </section>

        <div className="p-8">
          <section className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold">How It Works</h1>
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-semibold">
                Destination Suggestions
              </h2>
              <p>
                Our algorithm will suggest locations and places to visit based
                on your interests, preferences, and travel style.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-semibold">
                Schedule Integration
              </h2>
              <p>
                Simply input your travel dates and schedule, and we'll recommend
                places to visit during your free time.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                Personalized Itinerary
              </h2>
              <p>
                Get a tailored itinerary that suits your interests, budget, and
                time constraints.
              </p>
            </div>
          </section>
          <section className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold">Our Features</h1>
            <p className="mb-8">
              We offer a comprehensive set of features designed to make travel
              planning effortless and enjoyable. Discover inspiring
              destinations, customize your itinerary, and connect with fellow
              travelers.
            </p>
            <div className="mb-8">
              <i className="mb-2 text-3xl fas fa-map-marked-alt"></i>
              <h2 className="mb-2 text-2xl font-semibold">Location Library</h2>
              <p>
                Explore our vast library of destinations, complete with insider
                tips and recommendations.
              </p>
            </div>
            <div className="mb-8">
              <i className="mb-2 text-3xl fas fa-calendar-alt"></i>
              <h2 className="mb-2 text-2xl font-semibold">Schedule Planner</h2>
              <p>
                Easily plan your day, week, or month with our intuitive schedule
                planner.
              </p>
            </div>
            <div className="mb-8">
              <i className="mb-2 text-3xl fas fa-lightbulb"></i>
              <h2 className="mb-2 text-2xl font-semibold">
                Real-time Recommendations
              </h2>
              <p>
                Get instant suggestions for places to visit, eat, and stay based
                on your current location and schedule.
              </p>
            </div>
            <div>
              <i className="mb-2 text-3xl fas fa-comments"></i>
              <h2 className="mb-2 text-2xl font-semibold">Community Forum</h2>
              <p>
                Connect with fellow travelers, share experiences, and get advice
                from seasoned explorers.
              </p>
            </div>
          </section>

          <section id="team" className="w-full text-center">
            <h2 className="mb-10 text-3xl font-bold">Meet the Team</h2>
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
                He oversees all technical aspects of TripX, ensuring the
                platform runs smoothly and efficiently.
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
          </section>
        </div>
      </main>
    </div>
  )
}

export default AboutPage
