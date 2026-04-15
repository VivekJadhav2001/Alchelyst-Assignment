import React from "react";
import Icon from "../common/Icon";

function Filterbar({
  chips,
  activeChip,
  setActiveChip,
  search,
  setSearch,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-6 py-3 bg-gray-50 border-b gap-3">
      
      {/* Chips (scroll on mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {chips.map((chip) => (
          <button
            key={chip.id}
            onClick={() => setActiveChip(chip.id)}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-sm border ${
              activeChip === chip.id
                ? "bg-blue-100 text-blue-600 border-blue-200"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 border px-3 py-1 rounded-md bg-white w-full md:w-64">
        <Icon name={"search"} size={16}/>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none text-sm w-full"
        />
      </div>
    </div>
  );
}

export default Filterbar;