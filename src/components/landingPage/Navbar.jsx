import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <h1 className="text-2xl font-extrabold">Event Hub</h1>
        <ul className="flex space-x-8 font-semibold text-lg cursor-pointer">
          <Link to="/user/home">
            <li>Home</li>
          </Link>
          <li>Events</li>
          <li>Tickets</li>
          <li>Promotions</li>
        </ul>
      </div>
      <div>
        <button className="px-4 py-2 bg-black text-white rounded-lg mr-4 font-semibold">
          Log in
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-lg font-semibold">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
