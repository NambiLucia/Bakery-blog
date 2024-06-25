import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cake from './components/Cake';
import Cupcake from './components/Cupcake';
import Cookie from './components/Cookie';
import Fudgy from './components/Fudgy';
import Coffee from './components/Coffee';
import Chocolate from './components/Chocolate';
import About from './components/About';
import Recipe from './components/Recipe';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/cupcake" element={<Cupcake />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/fudgy" element={<Fudgy />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe" element={<Recipe />} />

      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
