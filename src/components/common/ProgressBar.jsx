import React from "react";

function ProgressBar({ value, color }) {
  const colorMap = {
    green: "bg-[#16A34A]",
    blue: "bg-[#2563EB]",
    amber: "bg-[#C4720A]",
  };

  return (
    <div className="flex items-center gap-2 min-w-[110px]">
      <div className="flex-1 h-[5px] bg-[#E2E5EB] rounded overflow-hidden">
        <div
          className={`h-full rounded transition-all duration-300 ${colorMap[color]}`}
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="text-[11px] text-[#5A6070] font-mono min-w-[32px] text-right">
        {value}%
      </span>
    </div>
  );
}

export default ProgressBar;