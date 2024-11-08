import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        toast.success("User created successfully!");
      } else {
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        toast.success("Sign-in successful!");
      }
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google sign-in successful!");
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`flex min-h-screen justify-center items-center transition-all duration-700 ${
        isSignup
          ? "bg-gradient-to-r from-white to-teal-300"
          : "bg-gradient-to-r from-teal-300 to-white"
      }`}
    >
      <div className="relative w-full max-w-4xl h-[500px] bg-white shadow-lg rounded-md overflow-hidden flex">
        {/* Animated sliding container */}
        <div
          className={`absolute inset-0 transform transition-transform duration-700 ${
            isSignup ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Left Side for Sign Up */}
          <div className="flex w-full h-full">
            <div className="w-1/2 bg-teal-300 flex flex-col justify-center items-center p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Welcome to MediCO</h2>
              <p className="mb-4">
                Join us to manage your medical needs online.
              </p>
              <button
                onClick={() => setIsSignup(false)}
                className="bg-white text-teal-500 px-4 py-2 rounded hover:bg-gray-200"
              >
                Sign In
              </button>
            </div>
            <div className="w-1/2 p-10 bg-white">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <h2 className="text-2xl font-bold mb-6">Create Account</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                >
                  Create Account
                </button>
                <div className="mt-2 text-center">
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="w-full bg-red-600 text-white px-4 py-2 mt-2 rounded hover:bg-red-700"
                  >
                    Sign Up with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Sliding content for Sign In */}
        <div
          className={`absolute inset-0 transform transition-transform duration-700 ${
            isSignup ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="flex w-full h-full">
            <div className="w-1/2 p-10 bg-white">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <h2 className="text-2xl font-bold mb-6">Sign In</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                >
                  Sign In
                </button>
                <div className="mt-2 text-center">
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="w-full bg-red-600 text-white px-4 py-2 mt-2 rounded hover:bg-red-700"
                  >
                    Sign In with Google
                  </button>
                </div>
              </form>
            </div>
            <div className="w-1/2 bg-teal-300 flex flex-col justify-center items-center p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Create Your Account</h2>
              <p className="mb-4">
                New here? Create an account to get started!
              </p>
              <button
                onClick={() => setIsSignup(true)}
                className="bg-white text-teal-500 px-4 py-2 rounded hover:bg-gray-200"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );


};

export default Signup;
