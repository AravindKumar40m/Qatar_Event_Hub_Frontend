import React from "react";

const LoginSignUp = () => {
  return (
    <section className="py-8 px-8 bg-white">
      <h3 className="text-xl font-bold mb-4">User Login/Sign Up</h3>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 rounded-lg border-2 border-gray-300 flex-grow"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-lg border-2 border-gray-300 flex-grow"
        />
        <button className="px-4 py-2 bg-[#800000] text-white rounded-lg">
          Login
        </button>
        <button className="px-4 py-2 bg-[#800000] text-white rounded-lg">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default LoginSignUp;
