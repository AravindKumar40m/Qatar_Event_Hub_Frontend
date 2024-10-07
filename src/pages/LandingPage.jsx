import React from "react";
import Navbar from "../components/landingPage/Navbar";
import HeroSection from "../components/landingPage/HeroSection";
import FeaturedEvents from "../components/landingPage/FeaturedEvents";
import EventCategories from "../components/landingPage/EventCategories";
import PricingSection from "../components/landingPage/PricingSection";
import Footer from "../components/landingPage/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen px-10 pt-5">
      <Navbar />
      <div className="py-16 bg-gray-300 mt-5 rounded-xl">
        <HeroSection />
        <FeaturedEvents />
        <EventCategories />
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
