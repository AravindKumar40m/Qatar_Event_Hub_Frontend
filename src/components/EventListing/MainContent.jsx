import React from "react";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const EventData = [
    {
      image: "https://via.placeholder.com/400x200",
      title: "Live Concert by XYZ Band",
      date: "12th Nov 2023",
      time: "7:00 PM",
      location: "Doha Exhibition Center",
      ticket: "From $50",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Football Match: Team A vs Team B",
      date: "15th Nov 2023",
      time: "4:00 PM",
      location: "Khalifa International Stadium",
      ticket: "From $30",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Theatre Play: Romeo and Juliet",
      date: "20th Nov 2023",
      time: "6:00 PM",
      location: "Katara Cultural Village ",
      ticket: "From $40",
    },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/eventDetail");
  };

  return (
    <div className="container px-8 py-8">
      <h1 className="font-bold text-2xl mb-2">Event Listings</h1>
      <div className="flex space-x-4 mb-8">
        <select className="w-[15%] p-2 border border-gray-300 rounded-xl">
          <option>Category</option>
          <option>Concert</option>
          <option>Sports</option>
          <option>Theater</option>
        </select>
        <input
          type="date"
          className="w-[20%] p-2 border border-gray-300 rounded-xl"
          placeholder="YYYY-MM-DD"
        />
        <input
          type="text"
          className="w-[20%] p-2 border border-gray-300 rounded-xl"
          placeholder="Location"
        />
        <select className="w-[15%] p-2 border border-gray-300 rounded-xl">
          <option>Popularity</option>
          <option>Most Popular</option>
          <option>Latest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EventData.map((data, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-48 rounded-lg object-cover"
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold">{data.title}</h3>
              <p className="text-gray-700 mt-2">
                Date: {data.date}
                <br />
                Time: {data.time}
                <br />
                Location: {data.location}
                <br />
                Ticket Prices: {data.ticket}
              </p>
              <button
                onClick={handleClick}
                className="mt-4 px-4 py-2 bg-black text-white rounded-md"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
