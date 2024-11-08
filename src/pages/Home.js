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
        className="flex items-center font-bold text-lg text-white hover:text-teal-300 transition-all duration-300"
      >
        {title}
        <FaChevronDown className="ml-2 text-sm" />
      </a>
      <ul className="absolute left-0 hidden group-hover:flex flex-col w-48 bg-gradient-to-r from-teal-600 to-teal-800 text-white border border-teal-300 rounded-lg shadow-lg mt-2 py-2 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
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
      <div className="flex justify-between items-center bg-teal-600 p-6 text-white shadow-md">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Medico Logo" className="h-10 w-10 mb-2" />
          <h1 className="text-2xl font-bold">MediCO</h1>
        </div>
        <div className="flex items-center w-2/4 pl-44">
          <input
            type="text"
            placeholder="Search Doctor or Hospital..."
            className="p-4 rounded w-full border-none hover:border-4 hover:border-teal-900 focus:outline-none"
          />
          <button className="bg-gray-300 p-2 rounded-r-lg h-14 text-teal-500 hover:bg-teal-200 transition duration-300">
            <FaSearch />
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center bg-gray-200 text-teal-500 px-4 py-2 rounded-lg hover:bg-teal-200 transition duration-300">
            <FaWallet className="mr-2" /> Connect Wallet
          </button>
          <button className="bg-gray-200 text-teal-500 px-4 py-2 rounded-lg hover:bg-teal-200 transition duration-300">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Second Division */}
      <div className="bg-gray-900 pt-0.5 shadow-md border-b-2 border-teal-700">
        <nav className="bg-teal-600 text-white py-4 px-6">
          <ul className="flex space-x-8 justify-center">
            <NavItems
              title="Patient Care"
              items={[
                "Patient Registration",
                "Find a Doctor",
                "Patient Guide",
                "Facilities",
                "Insurance Goals",
                "Transplant Authorization Committee",
                "Pay Online",
              ]}
            />
            <NavItems
              title="Centers of Excellence"
              items={[
                "Cardiology",
                "Oncology",
                "Emergency",
                "Gastroenterology",
                "Neurology / Neurosurgery",
                "Orthopedics",
                "Robotic surgery",
                "Transplant",
              ]}
            />
            <NavItems
              title="Specialties"
              items={[
                "Health Care",
                "Cosmetic Clinic",
                "Center of Genomic Medicine",
                "Elder care",
                "Anesthesiology",
                "Metabolic Surgery",
                "Dental Clinic",
                "Dentetics & Clinical Nutrition",
                "ENT",
              ]}
            />
            <NavItems
              title="Procedures"
              items={[
                "Brain tumor",
                "Bone Marrow Transplant",
                "Bioresorbable Vascular Scaffold",
                "Breast Cancer",
                "Chemotherapy",
                "Cosmetic Surgery",
              ]}
            />
            <NavItems
              title="International Patient"
              items={[
                "Contact us",
                "Plan your visit",
                "Services for international patients",
                "Hospital gallery & virtual tour",
                "Patient testimonials",
                "Insurance partners",
                "Health checks",
                "Share your feedback",
              ]}
            />
            <NavItems
              title="Academic & Research"
              items={[
                "Clinical Excellence",
                "CME'S / Workshops / Conferences",
                "Medical Journals",
                "Careers",
              ]}
            />
            <NavItems
              title="Contact Us"
              items={[
                "About us",
                "Consult Doctors Online",
                "Health Library",
                "News & Media",
                "Videos",
              ]}
            />
            <li className="font-semibold text-xl text-white hover:text-teal-300 hover:underline transition-all duration-300">
              <a href="#">Sign-up</a>
            </li>
            <li className="font-semibold text-xl text-white hover:text-teal-300 hover:underline transition-all duration-300">
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Third Division */}
      <div className="border-4 border-black text-center py-16 h-96 bg-gray-50">
      </div>

      {/* Fourth Division */}
      <div className="flex flex-wrap justify-center mb-8 gap-8 mt-8">
  <div className="w-44 h-48 bg-white shadow-md border-2 border-black  rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaCalendarCheck className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-teal-500 font-semibold">Book Appointment</p>
  </div>
  <div className="w-44 h-48 bg-white shadow-md border-2 border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaClipboardList className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-teal-500 font-semibold">Book Health Check-Up</p>
  </div>
  <div className="w-44 h-48 bg-white shadow-md border-2 border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaLaptopMedical className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-teal-500 font-semibold">Consult Online</p>
  </div>
  <div className="w-44 h-48 bg-white shadow-md border-2 border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaCapsules className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-teal-500 font-semibold">Buy Medicine</p>
  </div>
  <div className="w-44 h-48 bg-white shadow-md border-2 border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaHospital className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-teal-500 font-semibold">Find Hospital</p>
  </div>
  <div className="w-44 h-48 bg-white shadow-md border-2 border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaFileMedical className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-teal-500 font-semibold">View Health Record</p>
  </div>
  <div className="w-44 h-48 bg-white shadow-md border-2 border-black animate- rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaHeart className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-teal-500 font-semibold">Health and Wellness</p>
  </div>
  <div className="w-44 h-48 bg-white shadow-md border-2 border-black rounded-lg flex flex-col items-center justify-center p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <FaEnvelope className="text-4xl animate-bounce text-teal-500 mb-4" />
    <p className="text-center text-teal-500 font-semibold">Submit your Opinion</p>
  </div>

  {/* Fifth Division */}
  <div className="bg-teal-600 py-4 text-white">
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
            <div className="grid grid-cols-2 md:grid-cols-3 pl-14 gap-4 mt-6 pr-44 mt-8 md:mt-0">
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
          <div className="text-2xl text-teal-500 text-center">I am a P</div>
        )}
        {selectedTab === "ProHealth" && (
          <div className="text-2xl text-teal-500 text-center">I am a H</div>
        )}
      </div>
</div>


    </div>
  );
};

export default HomePage;
