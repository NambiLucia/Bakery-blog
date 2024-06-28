import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Pastry from './Pastry';
import Brownie from './Brownie';


function Home() {
  return (
    <div className='bg-[#ffead9]'>
      <Hero />
      <Header />
      <Pastry />
      <Brownie />
      <Footer />
    </div>
  );
}

export default Home;
