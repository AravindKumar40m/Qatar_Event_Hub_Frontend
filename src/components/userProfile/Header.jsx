import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-xl font-bold">Qatar Event Hub</h1>
      <nav className="space-x-8">
        <Link to="/user/home">Home</Link>
        <Link to="/user/createEvent">Create Event</Link>
        <Link to="/user/eventListings">Event Listings</Link>
        <Link to="/user/userProfile">User Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
