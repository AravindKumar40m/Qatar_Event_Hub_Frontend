const EventCategories = () => {
  const categories = [
    "Music",
    "Sports",
    "Arts",
    "Food & Drink",
    "Networking",
    "Family-Friendly",
    "Workshops",
    "Health & Wellness",
    "Performance",
    "Comedy Shows",
    "Sports & Fitness",
    "Immunity Gather",
    "Technology",
    "History & Heritage",
    "Film & Cinema",
    "Mystery & Thrillers",
    "Design & Fashion",
  ];

  return (
    <section className="py-8 px-8">
      <h3 className="text-2xl font-extrabold text-center mb-6 text-[#2b2c2b]">
        Event Categories
      </h3>
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-black text-white rounded-full"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;
