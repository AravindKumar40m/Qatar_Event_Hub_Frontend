import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#800000] text-white py-4 px-8 flex justify-between items-center border-b-2 border-[#cb5757]">
      <div className="flex items-center gap-1">
        <FaCalendarAlt className="size-5" />
        <h1 className="text-2xl font-bold">Qatar Event Hub</h1>
      </div>
      <nav className="space-x-6">
        <Link to="/vendor/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/vendor/createService" className="hover:underline">
          Create Service
        </Link>

        <Link to="/vendor/profile" className="hover:underline">
          Edit Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
