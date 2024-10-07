import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#800000] text-white py-6 shadow-inner mt-8">
      <div className="px-4 text-center flex justify-between">
        <p>&copy; 2023 Qatar Event Hub. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
