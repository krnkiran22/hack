// HomePage.js
import React, { useState } from 'react';
import { FaSearch, FaWallet, FaChevronDown } from 'react-icons/fa';
import { FaCalendarCheck, FaClipboardList, FaLaptopMedical, FaCapsules, FaHospital, FaFileMedical, FaHeart, FaEnvelope, FaBone, FaBrain, FaRibbon, FaLungs, FaExchangeAlt, FaXRay, FaStethoscope, FaTooth, FaFlask } from 'react-icons/fa';
import { GiKidneys } from 'react-icons/gi'; 
import logo from '../img/logo.jpg';
import Specialities_img from '../img/SpecialitiesImg.jpg'

// Define the NavItems component
const NavItems = ({ title, items }) => {
  return (
    <li className="relative group">
      <a
        href="#"
        className="flex items-center text-lg text-black hover:text-grey-300 transition-all duration-300"
      >
        {title}
        <FaChevronDown className="ml-2 text-sm" />
      </a>
      <ul className="absolute left-0 hidden group-hover:flex flex-col w-48 bg-gradient-to-r from-teal-600 to-teal-800 text-black border border-teal-300 rounded-lg shadow-lg mt-2 py-2 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
        {items.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 text-sm font-semibold hover:bg-teal-700 hover:text-white rounded-lg transition-all duration-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
};


const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("Specialities");  // <-- Define the selectedTab state

  const handleNavClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {/* First Division */}
      <div className="flex justify-between items-center bg-white p-2 text-black shadow-md">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Medico Logo" className="h-10 w-10 mb-2" />
          <h1 className="text-2xl pl-2 text-teal-500 font-bold">MediCO</h1>
        </div>
        <div className="flex items-center w-2/4 pl-44">
          <input
            type="text"
            placeholder="Search Doctor or Hospital..."
            className="p-2 rounded w-full border-2 hover:border-2 hover:border-teal-900 focus:outline-none"
          />
          <button className="bg-teal-500 border-2 h-11 border-teal-500 p-2 rounded-r-lg  text-white hover:bg-white hover:text-teal-500 transition duration-300">
            <FaSearch />
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center border-teal-500 border-2 bg-white text-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300">
            <FaWallet className="mr-2" /> Connect Wallet
          </button>
          <button className="bg-white border-teal-500 border-2 text-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Second Division */}
      <div className="bg-gray-900 pt-0.5 shadow-md border-b-1 border-teal-700">
        <nav className="bg-white text-black py-4 px-6">
          <ul className="flex space-x-8 justify-center">
            <NavItems
              title="Home"
              items={[
                "Health Care"
              ]}
            />
            <NavItems
              title="NFT-Minting"
              items={[
                "Health Care"
              ]}
            />
            <NavItems
              title="Profile"
              items={[
                "Health Care"
              ]}
            />
            
            <NavItems
              title="Contact Us"
              items={[
                "Health Care"
              ]}
            />
            <li className="font-mono text-xl text-black hover:text-teal-300 hover:underline transition-all duration-300">
              <a href="/signup">Sign-up</a>
            </li>
            <li className="font-mono text-xl text-black hover:text-teal-300 hover:underline transition-all duration-300">
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Third Division */}
      <div className="border-2 border-black text-center py-16 h-96 bg-gray-50">
        <h1></h1>
        <a href='/appointment' className='bg-teal-500 text-white font-semibold p-6'>Book an Appointment</a>
      </div>

      {/* Fourth Division */}
      <div className="flex flex-wrap justify-center mb-8 gap-8 mt-8">
        <div className='bg-gray-200 h-56 width-4/4 flex flex-wrap justify-center gap-8'>
  <div className="w-44 h-48 mt-4  hover:text-white hover:bg-teal-600 bg-white rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaCalendarCheck className="text-4xl hover:text-white animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-black hover:text-white font-semibold">Book Appointment</p>
  </div>
  <div className="w-44 h-48  mt-4 bg-white border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaClipboardList className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-black font-semibold">Book Health Check-Up</p>
  </div>
  <div className="w-44 h-48 mt-4 bg-white border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaLaptopMedical className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-black font-semibold">Consult Online</p>
  </div>
  <div className="w-44 h-48 mt-4 bg-white border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaCapsules className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-black font-semibold">Buy Medicine</p>
  </div>
  <div className="w-44 h-48 mt-4 bg-white border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaHospital className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-black font-semibold">Find Hospital</p>
  </div>
  <div className="w-44 h-48 mt-4 bg-white border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaFileMedical className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-black font-semibold">View Health Record</p>
  </div>
  <div className="w-44 h-48 mt-4 bg-white border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaHeart className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-black font-semibold">Health and Wellness</p>
  </div>
  <div className="w-44 h-48 mt-4 bg-white border-black rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaEnvelope className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-black font-semibold">Submit your Opinion</p>
  </div>
  </div>

  {/* Fifth Division */}
  <div className="bg-teal-600 py-4 w-full text-white">
        <nav className="flex justify-center space-x-8">
          <button
            className={`text-xl font-semibold hover:text-teal-300 transition duration-300 ${
              selectedTab === "Specialities" ? "underline" : ""
            }`}
            onClick={() => handleNavClick("Specialities")}
          >
            Specialities
          </button>
          <button
            className={`text-xl font-semibold hover:text-teal-300 transition duration-300 ${
              selectedTab === "Procedures" ? "underline" : ""
            }`}
            onClick={() => handleNavClick("Procedures")}
          >
            Procedures
          </button>
          <button
            className={`text-xl font-semibold hover:text-teal-300 transition duration-300 ${
              selectedTab === "ProHealth" ? "underline" : ""
            }`}
            onClick={() => handleNavClick("ProHealth")}
          >
            ProHealth
          </button>
        </nav>
      </div>

      {/* Sixth Division Content */}
      <div className="bg-gray-100 py-8">
        {selectedTab === "Specialities" && (
          <div className="flex flex-col md:flex-row items-start space-x-8 px-8">
            {/* Left side with text and image */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-teal-500 mb-4">
                Explore our Centres of Clinical Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We has dedicated Centres of Excellence for several key specialties and super specialties. They are unique and state of the art facilities spread across several of the Apollo hospital locations and each Centre of Excellence stands out as a citadel of world-class clinical outcomes.
                <br />
                <br />
                Learn about the world-class health care we provide.
              </p>
              <img
                src={Specialities_img} // Replace with actual image path
                alt="Centre of Clinical Excellence"
                className="rounded-lg shadow-lg h-[28rem] w-[75rem]"
              />
            </div>

            {/* Right side with specialty icons and names */}
            <div className="grid grid-cols-2 md:grid-cols-3 pl-14 gap-4 pr-44 pt-12 md:mt-0">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaHeart className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Heart Care</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaBone className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Orthopedic</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaBrain className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Neurosciences</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaRibbon className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Cancer</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaLungs className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Pulmonology</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaExchangeAlt className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Transplants</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaXRay className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Radio Oncology</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaStethoscope className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Gastroenterology</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <GiKidneys className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Nephrology</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaTooth className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Urology</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaFileMedical className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Dermatology</p>
              </div>
              <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <FaFlask className="text-4xl text-teal-500" />
                <p className="mt-2 text-center font-semibold text-gray-700">Endocrinology</p>
              </div>
            </div>
          </div>
        )}
        
        {selectedTab === "Procedures" && (
          <div className="text-2xl text-teal-500 text-center">I am a U</div>
        )}
{selectedTab === "ProHealth" && (
  <div className="flex justify-center items-center h-full p-8 bg-gray-50 rounded-lg shadow-lg">
    <div className="max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-teal-600 mb-4">
        Get proactive - Be ProHealth!
      </h2>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Build your ProHealth plan now
      </h3>
      <p className="text-gray-700 mb-4">
        ProHealth Program is a unique end-to-end personalized proactive health program that brings together predictive risk analysis, doctor-curated health packages, cutting-edge diagnostics with expert evaluation, and a personalized path to wellness, designed to make positive shifts – making you healthier.
      </p>
      <p className="text-gray-700 mb-4">
        This health program is based on Apollo's pioneering efforts in preventive care for almost 40 years and over 22 million health checks.
      </p>
      <p className="text-gray-700 mb-4">
        Apollo ProHealth program can PREDICT health risks, help PREVENT ailments, and OVERCOME lifestyle diseases where possible.
      </p>
      <button className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300" href='/appointment'>
        Book ProHealth
      </button>
    </div>
  </div>
)}



      </div>
</div>


    </div>
  );
};

export default HomePage;
