import LatestCollections from '../components/LatestCollections';
import Hero from '../components/Hero'; // Ensure the path and case are correct
import React from 'react';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
      
    </div>
  );
};

export default Home;