import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold">Qatar Event Hub</h1>
      <nav className="space-x-4">
        <Link to="/user/home" className="text-gray-700 hover:text-black">
          Home
        </Link>
        <Link to="/user/createEvent" className="text-gray-700 hover:text-black">
          Create Event
        </Link>
        <Link
          to="/user/eventListings"
          className="text-gray-700 hover:text-black"
        >
          Event Listings
        </Link>
        <Link to="/user/userProfile" className="text-gray-700 hover:text-black">
          User Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
