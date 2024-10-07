const Profile = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Profile</h2>

      {/* Account Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <p>
          Email:{" "}
          <a href="mailto:john.smith@example.com" className="text-blue-600">
            john.smith@example.com
          </a>
        </p>
        <p>Password: ********</p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">
          Edit Settings
        </button>
      </div>

      {/* Personal Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        <p>Name: John Smith</p>
        <p>Phone: +974 1234 5678</p>
        <p>Address: 123 Doha St, Qatar</p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">
          Edit Information
        </button>
      </div>

      {/* Past Ticket Purchases */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Past Ticket Purchases</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Concert Ticket - 12th Aug 2023</p>
            <p>$150</p>
          </div>
          <div className="flex justify-between">
            <p>Theater Ticket - 5th Sep 2023</p>
            <p>$80</p>
          </div>
          <div className="flex justify-between">
            <p>Sports Event - 20th Oct 2023</p>
            <p>$120</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Reviews/Ratings Given</h3>
        <div className="space-y-2">
          <p>Concert - "Amazing performance!" - 5 Stars</p>
          <p>Theater - "Great acting, enjoyed it a lot." - 4 Stars</p>
          <p>Sports Event - "Exciting match, will come again." - 5 Stars</p>
        </div>
      </div>

      {/* Event Reminders & Preferences */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">
          Event Reminders & Preferences
        </h3>
        <p>Reminders: Enabled</p>
        <p>Preferred Event Types: Concerts, Theater</p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">
          Edit Preferences
        </button>
      </div>

      {/* Event Organizer Analytics */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">
          Event Organizer Analytics
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-200 h-32 flex justify-center items-center">
            Attendance Statistics
          </div>
          <div className="bg-gray-200 h-32 flex justify-center items-center">
            Feedback Reports
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
