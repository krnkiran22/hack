// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'; // Make sure to adjust the import path if needed

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the route for the HomePage */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
