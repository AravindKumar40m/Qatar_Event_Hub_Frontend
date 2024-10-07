import React from "react";

const EventData = [
  {
    title: "Cultural Festival",
    description: "Experience the diversity of Qatar’s culture.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Live Concert",
    description: "Enjoy a night of live music with top artists.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Sports Event",
    description: "Catch the excitement of live sports.",
    image: "https://via.placeholder.com/400x250",
  },
];

const EventCategories = () => {
  return (
    <section className="bg-white py-8 px-8">
      <div className="flex flex-col md:flex-row gap-6">
        {EventData.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="font-bold text-lg mt-2">{data.title}</h3>
              <p className="text-gray-700">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;
