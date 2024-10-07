import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [serviceType, setServiceType] = useState(null);

  const timeSlots = [
    "8:30 AM",
    "8:45 AM",
    "9:00 AM",
    "9:15 AM",
    "9:30 AM",
    "9:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "1:00 PM",
  ];

  const serviceTypes = [
    { id: 1, type: "Online Service", icon: "🖥️" },
    { id: 2, type: "Physical Service", icon: "🏢" },
    { id: 3, type: "On-site Service", icon: "🏠" },
  ];

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime && serviceType) {
      console.log({
        date: selectedDate.toDateString(),
        time: selectedTime,
        serviceType,
      });
    } else {
      console.log("Please select a date, time, and service type.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Booking Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Book Vendor Service
        </h2>
        <p className="text-center mb-8">Select service, date, and time</p>

        {/* Vendor Information */}
        <div className="bg-pink-100 p-6 rounded-lg mb-10">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Vendor"
              className="rounded-full w-16 h-16"
            />
            <div>
              <h3 className="text-xl font-semibold">Vendor Information</h3>
              <p>Service Details | Availability Schedule</p>
            </div>
            <div className="flex space-x-4">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                📧 {/* Email Icon */}
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                ❤️ {/* Favorite Icon */}
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Section using react-calendar */}
        <div className="text-center">
          <div className="bg-gray-100 p-6 rounded-lg w-full max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Select a Date</h3>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()} // Disable past dates
              className="mx-auto"
            />
          </div>
        </div>

        {/* Time Slot Selection */}
        <div className="my-8">
          <h3 className="text-xl font-bold mb-4">Select Time Slot</h3>
          <div className="grid grid-cols-4 gap-4">
            {timeSlots.map((time, idx) => (
              <button
                key={idx}
                className={`p-2 rounded-lg text-center ${
                  selectedTime === time
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Service Type Selection */}
        <div className="my-8">
          <h3 className="text-xl font-bold mb-4">Service Type</h3>
          <div className="grid grid-cols-3 gap-4">
            {serviceTypes.map((service) => (
              <button
                key={service.id}
                className={`p-4 rounded-lg text-center flex flex-col items-center ${
                  serviceType === service.id
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setServiceType(service.id)}
              >
                <span className="text-3xl mb-2">{service.icon}</span>
                {service.type}
              </button>
            ))}
          </div>
        </div>

        {/* Confirm Booking Button */}
        <div className="text-center">
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BookingPage;
