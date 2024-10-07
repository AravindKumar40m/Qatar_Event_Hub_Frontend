import React from "react";
import Header from "../../components/vendor/Header";

const VendorProfile = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10">
        {/* Profile Section */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">Alex Morgan</h2>
            <p className="text-gray-500">Wedding Planner</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Services Offered */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Services Offered</h2>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
              Manage Services
            </button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-bold text-lg">Full Wedding Planning</h3>
              <p className="text-gray-500">
                Comprehensive planning from start to finish, ensuring a seamless
                wedding experience.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-bold text-lg">Day-of Coordination</h3>
              <p className="text-gray-500">
                Oversee and coordinate the wedding day activities to ensure
                everything runs smoothly.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-bold text-lg">Venue Decoration</h3>
              <p className="text-gray-500">
                Creative decoration services to transform venues into stunning
                wedding settings.
              </p>
            </div>
          </div>

          {/* Ratings & Reviews */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Reviewer"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Emily Stone</p>
                  <p className="text-gray-500">
                    "Amazing service! Our wedding was perfect thanks to Alex!"
                  </p>
                  <p className="text-yellow-500">★★★★★</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Reviewer"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-gray-500">
                    "Highly professional and attentive to details. Highly
                    recommend!"
                  </p>
                  <p className="text-yellow-500">★★★★★</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#800000] text-white py-4 px-8">
        <div className="flex justify-between">
          <p>&copy; 2023 Qatar Event Hub. All rights reserved.</p>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default VendorProfile;
