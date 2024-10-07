import React from "react";

const Notification = () => {
  return (
    <section className="bg-[#d6d6db] py-8 px-8">
      <h3 className="text-xl font-bold mb-4">Push Notifications</h3>
      <div className="flex items-center space-x-4">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>Enable notifications for new events and promotions</span>
      </div>
    </section>
  );
};

export default Notification;
