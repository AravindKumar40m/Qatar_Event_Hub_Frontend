import React from "react";
import Header from "../components/userProfile/Header";
import Sidebar from "../components/userProfile/Sidebar";
import Profile from "../components/userProfile/Profile";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-8">
          <Profile />
        </div>
      </div>
      <footer className="flex justify-between items-center p-4 bg-gray-200">
        <p>&copy; 2023 Qatar Event Hub</p>
        <nav className="space-x-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
};

export default UserProfile;
