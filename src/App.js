
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'; // Make sure to adjust the import path if needed
>>>>>>> 062c2046a706c4ada667b4566e33855a61b67ca9

const App = () => {
  return (
<<<<<<< HEAD
    <div>
        <Home />
        <MintRandomNFT />
     </div>
=======
    <Router>
      <Routes>
        {/* Define the route for the HomePage */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
>>>>>>> 062c2046a706c4ada667b4566e33855a61b67ca9
  );
};

export default App;
