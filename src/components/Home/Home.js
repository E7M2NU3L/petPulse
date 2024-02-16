import React from 'react';
import Products from './utils/Products';
import Offers from './utils/Offers';
import Category from './utils/Category';
import Brand from './utils/Brand';
import Blogs from './utils/Blogs';
import Ratings from './utils/Ratings';
import HeroSection from './utils/HeroSection';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Products />
      <Offers />
      <Category />
      <Brand />
      <Blogs />
      <Ratings />
    </div>
  );
};

export default Home;
