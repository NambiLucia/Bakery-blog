import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cake from './components/Cake';
import Cupcake from './components/Cupcake';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/cupcake" element={<Cupcake />} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
