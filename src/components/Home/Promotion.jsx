import React from "react";

const PromotionData = [
  {
    title: "Concert Discounts",
    description: "Get up to 50% off on selected concerts.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Sports Event Offers",
    description: "Exclusive deals for sports enthusiasts.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Art Exhibition Promos",
    description: "Special promotions for art lovers.",
    image: "https://via.placeholder.com/400x250",
  },
];

const Promotion = () => {
  return (
    <section className="bg-[#d6d6db] py-8 px-8">
      <h3 className="text-xl font-bold mb-4">Current Promotions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PromotionData.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <img
                src={data.image}
                alt={data.title}
                className="w-3/4 h-40 object-cover rounded-lg"
              />
              <h3 className="font-bold text-lg">{data.title}</h3>
              <p className="text-gray-700">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotion;
