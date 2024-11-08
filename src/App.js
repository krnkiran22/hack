
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'// Make sure to adjust the import path if needed
import MintRandomNFT from "./components/MintRandomNFT"
import BookAppointment from './pages/BookAppointment';



const App = () => {
  return (

    <div>
        <HomePage />
        <MintRandomNFT />
        <BookAppointment />
     </div>

   
  );



};

export default App;
