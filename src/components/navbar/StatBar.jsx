import React from "react";
import Icon from "../common/Icon";

/**
 * StatBar — replaces Filterbar.
 * Shows a summary count tile for each data section, plus a search input.
 * All counts are passed as props (sourced from dummy.json in Navbar).
 */

const STATS = [
  {
    key: "navWorkflows",
    label: "NAV Workflows",
    icon: "chart",
    accentClass: "text-teal-600 bg-teal-50 ring-teal-200",
    dotClass: "bg-teal-400",
  },
  {
    key: "otherWorkflows",
    label: "Other Workflows",
    icon: "clock",
    accentClass: "text-blue-600 bg-blue-50 ring-blue-200",
    dotClass: "bg-blue-400",
  },
  {
    key: "capitalEvents",
    label: "Capital Events",
    icon: "dollar",
    accentClass: "text-amber-600 bg-amber-50 ring-amber-200",
    dotClass: "bg-amber-400",
  },
  {
    key: "reports",
    label: "Reports",
    icon: "file",
    accentClass: "text-green-600 bg-green-50 ring-green-200",
    dotClass: "bg-green-400",
  },
  {
    key: "payments",
    label: "Payments",
    icon: "card",
    accentClass: "text-purple-600 bg-purple-50 ring-purple-200",
    dotClass: "bg-purple-400",
  },
];

function StatBar({
  navWorkflowsCount,
  otherWorkflowsCount,
  capitalEventsCount,
  reportsCount,
  paymentsCount,
  search,
  setSearch,
}) {
  const counts = {
    navWorkflows: navWorkflowsCount,
    otherWorkflows: otherWorkflowsCount,
    capitalEvents: capitalEventsCount,
    reports: reportsCount,
    payments: paymentsCount,
  };

  return (
    <div className="bg-white border-b border-gray-100 px-4 md:px-6 py-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        {/* Stat tiles — scrollable on small screens */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
          {STATS.map((stat) => (
            <StatTile
              key={stat.key}
              label={stat.label}
              count={counts[stat.key]}
              icon={stat.icon}
              accentClass={stat.accentClass}
              dotClass={stat.dotClass}
            />
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full w-full sm:w-56 shrink-0 focus-within:ring-1 focus-within:ring-teal-300 focus-within:border-teal-300 transition-all">
          <Icon name="search" size={14} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none text-sm bg-transparent w-full text-gray-700 placeholder-gray-400"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-gray-400 hover:text-gray-600 text-xs leading-none"
            >
              ✕
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

function StatTile({ label, count, accentClass, dotClass }) {
  return (
    <div
      className={`flex items-center gap-2 whitespace-nowrap px-3 py-1.5 rounded-full ring-1 text-xs font-medium ${accentClass}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
      <span>{label}</span>
      <span className="font-semibold">{count}</span>
    </div>
  );
}

export default StatBar;