import React from "react";
import LandingPage from "./pages/LandingPage";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import EventListings from "./pages/EventListings";
import { Route, Routes } from "react-router-dom";
import EventDetailPage from "./pages/EventDetailPage";
import VendorProfile from "./pages/vendor/VendorProfile";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import CreateNewService from "./pages/vendor/CreateNewService";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ServiceListing from "./pages/ServiceListing";
import BookingPage from "./pages/BookingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<LandingPage />} />
      <Route path="/user/home" element={<Home />} />
      <Route path="/user/userProfile" element={<UserProfile />} />
      <Route path="/user/eventListings" element={<EventListings />} />
      <Route path="/user/eventDetail" element={<EventDetailPage />} />
      <Route path="/user/createEvent" element={<ServiceListing />} />
      <Route path="/user/booking" element={<BookingPage />} />
      <Route path="/vendor/dashboard" element={<VendorDashboard />} />
      <Route path="/vendor/createService" element={<CreateNewService />} />
      <Route path="/vendor/profile" element={<VendorProfile />} />
    </Routes>
  );
};

export default App;
