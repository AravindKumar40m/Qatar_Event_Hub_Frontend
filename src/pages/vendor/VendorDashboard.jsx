import React from "react";
import Header from "../../components/vendor/Header";

const VendorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Header />

      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Statistics */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Statistics</h2>
            <div className="flex justify-around items-center space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Bar Chart"
                className="h-24"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Line Graph"
                className="h-24"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Pie Chart"
                className="h-24"
              />
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Calendar</h2>
            {/* Placeholder for calendar */}
            <div className="h-24 bg-gray-200 rounded-md flex items-center justify-center">
              <p className="text-gray-500">No Calendar Available</p>
            </div>
          </div>
        </div>

        {/* Bookings Section */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4">Bookings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-red-100 p-4 rounded-md shadow-md">
              <p className="font-bold text-gray-700">
                Wedding Event on 15th Nov
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Manage
              </button>
            </div>
            <div className="flex justify-between items-center bg-red-100 p-4 rounded-md shadow-md">
              <p className="font-bold text-gray-700">
                Corporate Party on 20th Nov
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Manage
              </button>
            </div>
            <div className="flex justify-between items-center bg-red-100 p-4 rounded-md shadow-md">
              <p className="font-bold text-gray-700">
                Birthday Bash on 25th Nov
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#800000] text-white py-6 shadow-inner mt-8">
        <div className="px-4 text-center flex justify-between">
          <p>&copy; 2023 Qatar Event Hub. All rights reserved.</p>
          <div className="space-x-4 mt-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendorDashboard;
