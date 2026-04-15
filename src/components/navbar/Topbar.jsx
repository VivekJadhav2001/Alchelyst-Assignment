import React from "react";
import Icon from "../common/Icon";
import { useNavigate } from "react-router-dom";

function Topbar({ navTabs, activeTab, setActiveTab, user, date }) {

  const navigate = useNavigate()
  
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-6 py-3 border-b bg-white gap-3">
      
      {/* Top Row */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/")}>
          <div className="w-6 h-6 bg-black rounded-sm text-white text-center">A</div>
          <span className="font-semibold text-gray-800 text-lg">Alchelyst</span>
        </div>


        <div className="md:hidden w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-full text-sm font-semibold">
          {user.initials}
        </div>
      </div>

      {/* Nav Tabs*/}
      <nav className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar">
        {navTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.label)
               navigate(tab.id)
            }}
            className={`whitespace-nowrap text-sm font-medium pb-1 border-b-2 ${
              activeTab === tab.label
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm text-gray-600 border px-3 py-1 rounded-md">
          <Icon name={"calendar"} size={16} />
          <span className="font-medium">{date.from}</span> -
          <span className="font-medium">{date.to}</span>
        </div>

        <div className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-full text-sm font-semibold">
          {user.initials}
        </div>
      </div>
    </header>
  );
}

export default Topbar;