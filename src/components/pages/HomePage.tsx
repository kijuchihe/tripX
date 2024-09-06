
import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <header className="flex justify-between items-center px-4 py-2">
        <div className="text-2xl font-bold text-yellow-500">TripX</div>
      </header>

      {/* Main Content Section */}
      <main className="text-center mt-10 relative">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-200 rounded-full"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />
        <h1 className="text-3xl font-bold mt-20 animate-fade-in hover-move relative">
          Plan Your Journey
        </h1>
        <h2 className="text-3xl font-bold text-yellow-500 animate-fade-in hover-move relative">
          Explore New Destinations
        </h2>
        <h3 className="text-3xl font-bold animate-fade-in hover-move relative">
          Time-Saving Plans
        </h3>
        <p className="mt-4 text-gray-600">
          Discover your next adventure easily with TripX, your ultimate travel planning companion.
        </p>
        <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded">
          Get Started
        </button>
      </main>

      {/* Features Section */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-bold">Our Features</h2>
        <p className="mt-4 text-gray-600 mx-4">
          We offer a comprehensive set of features designed to make travel planning effortless and enjoyable. Discover inspiring destinations, customize your itinerary, and connect with fellow travelers.
        </p>
      </section>

      {/* Smart Suggestions and Schedule Integration Section */}
      <section className="flex justify-center mt-10">
        <div className="text-center mx-4">
          <i className="fas fa-lightbulb text-4xl text-blue-500 mb-2" />
          <h3 className="text-xl font-bold mt-2">Smart Suggestions</h3>
          <p className="mt-2 text-gray-600">Receive tailored destination recommendations based</p>
        </div>
        <div className="text-center mx-4">
          <i className="fas fa-calendar-alt text-4xl text-orange-500 mb-2" />
          <h3 className="text-xl font-bold mt-2">Schedule Integration</h3>
          <p className="mt-2 text-gray-600">Effortlessly integrate your travel schedule and receive</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-20 text-xs text-gray-600">
        <p>&copy; 2024 TripX. All rights reserved.</p>
        <p>
          <a href="#" className="text-blue-600">
            Terms and Conditions
          </a>{' '}
          |{' '}
          <a href="#" className="text-blue-600">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Homepage;