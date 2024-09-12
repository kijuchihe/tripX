// import React from 'react'
 import TopDestinations from '../../components/Recommendations/TopDestinations';
//import RestaurantRecommendation from '../../components/Recommendations/RestaurantRecommendation';
 import TravelTips from '../../components/Recommendations/TravelTips';
 import UserReview from '../../components/Recommendations/UserReview';
 //import Layout from '../../components/layout'
 import Container from '../../components/layout/Container'
// import styles from './RecommendationPage.module.css'

// const RecommendationsPage: React.FC = () => {
//     try {
//       return (
//         <main className={styles.recommendationsPage}>
//           <TopDestinations />
//           <RestaurantRecommendation />
//           <TravelTips />
//           <UserReview />
//         </main>
//       );
//     } catch (error) {
//       console.error("Error in RecommendationsPage: ", error);
//       return <div>Error loading recommendations!</div>;
//     }
//   };
  

// export default RecommendationsPage
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RecommendationPage.module.css';

const RecommendationsPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search Query:', query);
    // Add logic for searching using API or state management
  };

  return (
    <main className={styles.recommendationsPage}>
      {/* Top Section: Categories */}
      <section className={styles.topSection}>
        <h1 className={styles.heading}>Where to?</h1>
        <div className={styles.categories}>
        <Link to="/search" className={styles.categoryButton}>
            <span role="img" aria-label="Search all">🔎</span> Search all
          </Link>
          <Link to="/hotels" className={styles.categoryButton}>
            <span role="img" aria-label="Hotels">🛏️</span> Hotels
          </Link>
          <Link to="/things-to-do" className={styles.categoryButton}>
            <span role="img" aria-label="Things to Do">🎟️</span> Things to Do
          </Link>
          <Link to="/restaurants" className={styles.categoryButton}>
            <span role="img" aria-label="Restaurants">🍴</span> Restaurants
          </Link>
          <Link to="/flights" className={styles.categoryButton}>
            <span role="img" aria-label="Flights">✈️</span> Flights
          </Link>
          <Link to="/vacation-rentals" className={styles.categoryButton}>
            <span role="img" aria-label="Vacation Rentals">🏡</span> Vacation Rentals
          </Link>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className={styles.searchSection}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchInputWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Places to go, things to do, hotels..."
              className={styles.searchInput}
            />
          </div>
          <button type="submit" className={styles.searchButton}>Search</button>
        </form>
      </section>


      <Container isFirst>
        <div className="flex flex-wrap min-h-[500px] justify-center items-center p-4 w-full rounded-xl md:justify-between bg-primary/30 gap-2">
          <div className=" w-full md:w-[48%] flex flex-col items-center md:items-start gap-4">
            <small className="flex gap-2 items-center text-xs font-light">
              <span className="text-primary">Powered by AI</span>
              <span className="text-black">
                <span className="p-1 bg-white rounded-lg">BETA</span>
              </span>
            </small>
            <p className="text-6xl font-bold text-center text-primary md:text-left">
              Get custom recs for your next trip
            </p>
            <div className="text-3xl font-bold text-center text-primary md:text-left">
              Find great eats, experiences, and more—inspired by things you
              love.
            </div>
            <div>
              <a
                className="flex gap-2 items-center px-4 py-3 text-white rounded-full bg-primary w-fit"
                data-automation="GaiEntryButton"
                href="/ai"
                target="_self"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20px"
                  height="20px"
                  className=""
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.53 5.116a5.27 5.27 0 0 1-3.118-3.118c-.108-.294-.534-.294-.642 0a5.24 5.24 0 0 1-3.115 3.118c-.294.108-.294.534 0 .642a5.27 5.27 0 0 1 3.118 3.118c.108.294.534.294.642 0a5.27 5.27 0 0 1 3.118-3.118c.294-.108.294-.534 0-.642zm1.735-.418a.746.746 0 0 0 0 1.493c3.056 0 5.528 2.45 5.528 5.401 0 1.549-.806 3.252-2.05 4.952-1.095 1.495-2.404 2.828-3.468 3.882-1.07-1.054-2.399-2.401-3.503-3.91-1.234-1.69-2.033-3.382-2.033-4.924a.746.746 0 1 0-1.493 0c0 2.019 1.024 4.029 2.32 5.804 1.299 1.774 2.872 3.32 3.98 4.407l.04.04.16.16a.746.746 0 0 0 1.048.01l.15-.146.02-.02.053-.056.003-.002c1.102-1.09 2.645-2.613 3.927-4.362 1.306-1.785 2.339-3.808 2.339-5.835 0-3.803-3.168-6.894-7.021-6.894m-1.02 5.244a1.266 1.266 0 0 1 1.647.666 1.22 1.22 0 0 1-.678 1.599 1.266 1.266 0 0 1-1.647-.666 1.22 1.22 0 0 1 .679-1.6m-.566-1.389c1.397-.57 3.01.077 3.596 1.475a2.72 2.72 0 0 1-1.495 3.568c-1.397.57-3.01-.078-3.596-1.476a2.717 2.717 0 0 1 1.495-3.567M5.555 7.17a3.76 3.76 0 0 0 2.228 2.227h.002c.21.077.21.382 0 .459a3.77 3.77 0 0 0-2.228 2.227c-.077.21-.38.21-.458 0a3.77 3.77 0 0 0-2.227-2.227c-.21-.077-.21-.382 0-.459A3.74 3.74 0 0 0 5.097 7.17c.077-.21.381-.21.458 0"
                  ></path>
                </svg>
                <span>Start a trip with AI</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[48%] flex items-center justify-center md:h-full">
            <img
              src="https://static.tacdn.com/img2/trips/home-gai-entry-v2-dv.png"
              width="100%"
              height="100%"
              alt=""
              className="object-cover bg-primary"
            />
          </div>
          </div>
          </Container>

      {/* Recommendations Components */}
      <section className={styles.recommendations}>
        {/* Example Recommendations components here */}
        <TopDestinations />
        <TravelTips />
        <UserReview />
      </section>
      </main>
  );
};

export default RecommendationsPage;
