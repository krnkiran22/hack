import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    gender: "",
    age: "",
    bloodGroup: "",
  });
  const [email, setEmail] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      const user = auth.currentUser;
      if (user) {
        setEmail(user.email);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        }
      }
    };
    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
    setHasChanges(true); // Mark that changes have been made
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid), {
          ...profileData,
          email: user.email, // Ensure email stays the same
        });
        console.log("Profile updated successfully!");
        setIsEditable(false); // Disable editing after submission
        setHasChanges(false); // Reset change flag
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Profile Card */}
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email (Non-editable) */}
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              value={email}
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
              disabled
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              className={`w-full p-2 border border-gray-300 rounded-lg ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
              disabled={!isEditable}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-600 font-medium">Gender</label>
            <input
              type="text"
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              className={`w-full p-2 border border-gray-300 rounded-lg ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
              disabled={!isEditable}
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-600 font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={profileData.age}
              onChange={handleInputChange}
              className={`w-full p-2 border border-gray-300 rounded-lg ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
              disabled={!isEditable}
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-gray-600 font-medium">
              Blood Group
            </label>
            <input
              type="text"
              name="bloodGroup"
              value={profileData.bloodGroup}
              onChange={handleInputChange}
              className={`w-full p-2 border border-gray-300 rounded-lg ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
              disabled={!isEditable}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-4">
            {!isEditable ? (
              <button
                type="button"
                onClick={handleEdit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Edit
              </button>
            ) : (
              hasChanges && (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              )
            )}
          </div>
        </form>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;