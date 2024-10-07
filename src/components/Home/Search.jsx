import React from "react";

const Search = () => {
  return (
    <section className="bg-[#d6d6db] py-8 px-8">
      <h3 className="text-xl font-bold mb-4">Quick Search/Filter</h3>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search events"
          className="flex-grow p-2 rounded-lg border-gray-300"
        />
        <select className="p-2 rounded-lg border-gray-300">
          <option>All Categories</option>
          <option>Cultural</option>
          <option>Music</option>
          <option>Sports</option>
        </select>
        <button className="px-4 py-2 bg-[#800000] text-white rounded-lg">
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
