import React from "react";
import Icon from "../common/Icon";
import { useNavigate } from "react-router-dom";

function Topbar({ navTabs, activeTab, setActiveTab, user, date }) {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-6 py-3 bg-white border-b border-gray-100 gap-3">

      {/* Top row (mobile: brand + avatar) */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          <div className="w-7 h-7 rounded-md bg-gray-900 flex items-center justify-center">
            <span className="text-white text-xs font-semibold tracking-tight">A</span>
          </div>
          <span className="text-gray-900 font-semibold text-base tracking-tight">
            Alchelyst
          </span>
        </div>

        {/* Avatar — only on mobile */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">
            <Icon name="calendar" size={12} />
            <span>{date.from}</span>
            <span className="text-gray-300">–</span>
            <span>{date.to}</span>
          </div>
          <Avatar initials={user.initials} />
        </div>
      </div>

      {/* Nav tabs — scrollable on mobile */}
      <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar -mx-1 px-1">
        {navTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.label);
              navigate(`/${tab.id}`);
            }}
            className={`whitespace-nowrap text-sm px-3 py-1.5 rounded-full transition-all duration-150 font-medium ${
              activeTab === tab.label
                ? "bg-teal-50 text-teal-700 ring-1 ring-teal-200"
                : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Right section — desktop only */}
      <div className="hidden md:flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 px-3 py-1.5 rounded-full">
          <Icon name="calendar" size={13} />
          <span className="font-medium text-gray-700">{date.from}</span>
          <span className="text-gray-300">–</span>
          <span className="font-medium text-gray-700">{date.to}</span>
        </div>
        <Avatar initials={user.initials} tooltip={user.name} />
      </div>
    </header>
  );
}

function Avatar({ initials, tooltip }) {
  const navigate = useNavigate()
  return (
    <div
      title={tooltip}
      className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-full text-xs font-semibold cursor-pointer hover:bg-gray-700 transition-colors"
      onClick={()=>navigate("/profile")}
    >
      {initials}
    </div>
  );
}

export default Topbar;