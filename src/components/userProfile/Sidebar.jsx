const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-white p-6 shadow-md">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold">John Smith</h2>
      </div>
      <ul className="mt-6 space-y-4">
        <li className="cursor-pointer">Manage Account Settings</li>
        <li className="cursor-pointer">View/Edit Personal Information</li>
        <li className="cursor-pointer">Past Ticket Purchases</li>
        <li className="cursor-pointer">Reviews/Ratings Given</li>
        <li className="cursor-pointer">Event Reminders & Preferences</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
