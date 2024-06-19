import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Pastry from './Pastry';
import Brownie from './Brownie';


function Home() {
  return (
    <div>
      <Hero />
      <Header />
      <Pastry />
      <Brownie />
      <Footer />
    </div>
  );
}

export default Home;
