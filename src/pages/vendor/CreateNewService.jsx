import React, { useState } from "react";
import Header from "../../components/vendor/Header";
import Footer from "../../components/vendor/Footer";

const CreateNewService = () => {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSaveDraft = () => {
    // Add save draft logic here
    console.log("Draft saved!");
  };

  const handleSubmitService = () => {
    // Add submit logic here
    console.log("Service submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Create New Service</h2>

        <form className="bg-white p-8 shadow-md rounded-lg space-y-6">
          {/* Service Name */}
          <div>
            <label className="block font-bold text-gray-700 mb-2">
              Service Name
            </label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:border-red-300"
              placeholder="Enter the service name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-bold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:border-red-300"
              rows="5"
              placeholder="Enter a detailed description of the service"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-bold text-gray-700 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:border-red-300"
              placeholder="Price"
            />
          </div>

          {/* Upload Images */}
          <div>
            <label className="block font-bold text-gray-700 mb-2">
              Upload Images
            </label>
            <div className="flex space-x-4">
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <input type="file" className="opacity-0 absolute" />
                <span className="text-gray-400 text-sm">Upload</span>
              </div>
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <input type="file" className="opacity-0 absolute" />
                <span className="text-gray-400 text-sm">Upload</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleSaveDraft}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={handleSubmitService}
              className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600"
            >
              Submit Service
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreateNewService;
