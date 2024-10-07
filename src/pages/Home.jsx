import React from "react";
import Header from "../components/Home/Header";
import HeroSection from "../components/Home/HeroSection";
import EventCategories from "../components/Home/EventCategories";
import Search from "../components/Home/Search";
import SocialMedia from "../components/Home/SocialMedia";
import Promotion from "../components/Home/Promotion";
import LoginSignUp from "../components/Home/LoginSignUp";
import Notification from "../components/Home/Notification";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <EventCategories />
      <Search />
      <SocialMedia />
      <Promotion />
      <LoginSignUp />
      <Notification />
      <Footer />
    </div>
  );
};

export default Home;
