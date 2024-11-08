
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import MintRandomNFT from './components/MintRandomNFT'
 
import HomePage from './pages/Home'; // Make sure to adjust the import path if needed
 
const App = () => {
  return (
  
    <div>
        <Home />
        <MintRandomNFT />
     </div>
 
    
  );
};

export default App;
