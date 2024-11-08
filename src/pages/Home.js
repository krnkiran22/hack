// components/HomePage.js
import React from 'react';
import { FaSearch, FaWallet } from 'react-icons/fa';
import logo from '../img/logo.jpg';

// Define the NavItems component
const NavItems = ({ title, items }) => {
  return (
    <li className="relative group">
      <a
        href="#"
        className="font-semibold text-xl text-white hover:text-teal-300 hover:underline transition-all duration-300"
      >
        {title}
      </a>
      <ul className="absolute left-0 hidden bg-white text-teal-500 border rounded-lg shadow-lg group-hover:block mt-2 space-y-2 p-2 transition-all duration-300">
        {items.map((item, index) => (
          <li key={index} className="text-sm hover:text-teal-700 hover:underline">
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* First Division */}
      <div className="flex justify-between items-center bg-teal-600 p-6 text-white shadow-md">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Medico Logo" className="h-10 w-10 mb-2" />
          <h1 className="text-2xl font-bold">MediCO</h1>
        </div>
        <div className="flex items-center w-1/4 pl-44">
          <input
            type="text"
            placeholder="Search Doctor or Hospital..."
            className="p-2 w-full rounded-l-lg border-none focus:outline-none"
          />
          <button className="bg-gray-300 p-2 rounded-r-lg h-10 text-teal-500 hover:bg-teal-200 transition duration-300">
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
      <div className="bg-gray-100 py-4 shadow-md border-b-2 border-teal-700">
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
              title="Procedures"
              items={[
                "Brain Tumor",
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
              title="Contact Us"
              items={[
                "About us",
                "Consult Doctors Online",
                "Health Library",
                "News & Media",
                "Videos",
              ]}
            />
          </ul>
        </nav>
      </div>

      {/* Third Division */}
      <div className="text-center py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-teal-500 mb-4">Schedule your Appointment Now</h2>
        <p className="text-lg text-gray-700 mb-8">
          Looking for an Expert? <br />
          Max Healthcare is home to some of the eminent doctors in the world.
        </p>
        <button
          className="bg-teal-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-teal-600"
          onClick={() => window.location.href = '#book-dr'}
        >
          Find a Doctor
        </button>
      </div>
    </div>
  );
};

export default HomePage;
