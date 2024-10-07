import React, { useState } from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import { useNavigate } from "react-router-dom";

const ServiceListing = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Luxurious Wedding Venue",
      description:
        "An exquisite venue offering top-notch services for your special day.",
      price: "$5000",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Floral Decorations",
      description:
        "Stunning floral arrangements to add color and fragrance to your event.",
      price: "$300",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Sound System Rental",
      description:
        "High-quality sound systems to ensure your event's audio is perfect.",
      price: "$150",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Sort by");
  const [showAvailable, setShowAvailable] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBook = () => {
    navigate("/user/booking");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg"
            placeholder="Search services..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={showAvailable}
                onChange={() => setShowAvailable(!showAvailable)}
              />
              Show only available
            </label>
            <select
              className="p-2 border border-gray-300 rounded-lg"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option>Sort by</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">{service.price}</span>
                <button
                  onClick={handleBook}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-48">
        <Footer />
      </div>
    </div>
  );
};

export default ServiceListing;
