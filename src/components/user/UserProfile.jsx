import React from "react";

function UserProfile({ user }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        
        {/* Avatar */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-base sm:text-lg font-semibold text-gray-600">
              {user.initials}
            </span>
          )}
        </div>

        {/* User Info */}
        <div>
          <h2 className="text-[15px] sm:text-[16px] font-semibold text-gray-800">
            {user.name}
          </h2>
          <p className="text-[12px] sm:text-[13px] text-gray-500">
            {user.role}
          </p>

          {/* Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 text-[11px] sm:text-[12px] text-gray-400">
            <span className="break-all">{user.email}</span>
            <span className="hidden sm:inline">•</span>
            <span>{user.location}</span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="text-left sm:text-right w-full sm:w-auto">
        <p className="text-[11px] sm:text-[12px] text-gray-400">
          Contact
        </p>
        <p className="text-[12px] sm:text-[13px] font-medium text-gray-700">
          {user.phone}
        </p>

        <button className="mt-2 w-full sm:w-auto text-[12px] px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default UserProfile;