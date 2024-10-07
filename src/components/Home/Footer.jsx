import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#800000] text-white py-4 px-8">
      <div className="flex justify-between">
        <p>&copy; 2023 Qatar Event Hub. All rights reserved.</p>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
