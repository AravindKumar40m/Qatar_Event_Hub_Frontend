import React from "react";
import Header from "../components/EventListing/Header";
import MainContent from "../components/EventListing/MainContent";
import Footer from "../components/EventListing/Footer";

const EventListings = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default EventListings;
