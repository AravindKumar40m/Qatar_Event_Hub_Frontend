import React from "react";
import Header from "../components/EventListing/Header";
import Footer from "../components/EventListing/Footer";

const EventDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Main Venue"
              className="w-full h-auto rounded-lg"
            />
            <div className="flex space-x-4 mt-4">
              <img
                src="https://via.placeholder.com/100x100"
                alt="Gallery Image 1"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100x100"
                alt="Gallery Image 2"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100x100"
                alt="Gallery Image 3"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100x100"
                alt="Gallery Image 4"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100x100"
                alt="Gallery Image 5"
                className="w-20 h-20 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold">
              Qatar Event Hub Launch Party Venue
            </h2>
            <p className="text-gray-500 mt-2">Doha, Qatar</p>
            <div className="flex items-center mt-4">
              <div className="text-yellow-500 flex space-x-1">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <span className="ml-2 text-gray-600">4.5</span>
            </div>

            <ul className="list-none mt-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2">○</span> Central Location
              </li>
              <li className="flex items-center">
                <span className="mr-2">○</span> 10-minute drive from Hamad
                International
              </li>
              <li className="flex items-center">
                <span className="mr-2">○</span> Luxury Accommodations
              </li>
              <li className="flex items-center">
                <span className="mr-2">○</span> Free Wi-Fi Access
              </li>
              <li className="flex items-center">
                <span className="mr-2">○</span> Relaxation Facilities
              </li>
            </ul>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <p className="text-gray-700">
            Nestled in the heart of Doha's vibrant landscape, the Qatar Event
            Hub is a tranquil haven for event-goers seeking relaxation and
            rejuvenation. Many of our venues boast stunning views of Qatar’s
            pristine beaches and crystal-clear waters. Inside, you’ll find
            modern amenities such as state-of-the-art sound systems and
            complimentary high-speed WiFi to ensure your event is both
            comfortable and connected. At Qatar Event Hub, your satisfaction is
            our top priority. Unwind and enjoy yourself at our world-class
            relaxation facilities, where a team of skilled therapists awaits to
            provide you with an array of rejuvenating treatments and therapies.
          </p>
        </div>

        {/* Facilities */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Facilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-2">
              <span>📶</span>
              <p className="text-gray-700">Free Wi-Fi</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>🏊</span>
              <p className="text-gray-700">Indoor Swimming</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>💆‍♀️</span>
              <p className="text-gray-700">SPA World</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>🛏️</span>
              <p className="text-gray-700">Luxury Accommodations</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>🌅</span>
              <p className="text-gray-700">Terrace</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>🏢</span>
              <p className="text-gray-700">Balcony</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
