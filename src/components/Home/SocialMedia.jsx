import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="py-8 px-8">
      <h3 className="text-xl font-bold mb-4">Share Events on Social Media</h3>
      <div className="flex space-x-4 text-[#800000]">
        <FaFacebookSquare className="size-8 cursor-pointer" />
        <FaTwitterSquare className="size-8 cursor-pointer" />
      </div>
    </section>
  );
};

export default SocialMedia;
