
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import HomePage from './pages/Home'// Make sure to adjust the import path if needed
import MintRandomNFT from "./components/MintRandomNFT"
import BookAppointment from './pages/BookAppointment';
import Profile from './pages/Profile';
import Signup from './pages/Signup';



 
const App = () => {
  return (

  
 
     <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
                <HomePage />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
 

  );
};
 
 

export default App;
