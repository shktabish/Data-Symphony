import React from 'react'
import Hero from '../Components/Hero'
import TabLayout from '../Views/TabLayout';
import AboutUs from '../Views/AboutUs'
import Why from '../Views/Why'
import FAQ from '../Views/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <TabLayout />
      <AboutUs />
      <Why />
      <FAQ />
    </>
  );
}

export default Home;
