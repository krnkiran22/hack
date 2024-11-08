import React, { useState } from "react";
import { auth } from "../firebase"; // Ensure Firebase setup is correctly done
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent! Please check your inbox.");
      setEmailSent(true); // Update the state to reflect that the email was sent
    } catch (error) {
      toast.error(error.message);
      console.error("Error sending password reset email:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleEmailSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
        {!emailSent ? (
          <div>
            <div className="mb-4">
              <label className="block mb-1">Enter your email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Reset Email
            </button>
          </div>
        ) : (
          <p className="text-green-600">
            A password reset link has been sent to your email. Please check your
            inbox.
          </p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
