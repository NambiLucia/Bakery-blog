import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cake from './components/Cake';
import Cupcake from './components/Cupcake';
import Cookie from './components/Cookie';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/cupcake" element={<Cupcake />} />
          <Route path="/cookie" element={<Cookie />} />

      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
