import React from "react";

function StatusPill({ label, status }) {
  const map = {
    done: "bg-[#EDFAF3] text-[#166534]",
    warn: "bg-[#FFF8EC] text-[#92400e]",
    gray: "bg-[#F3F4F6] text-[#5A6070]",
    blue: "bg-[#EEF3FF] text-[#1e40af]",
  };

  const dotMap = {
    done: "bg-[#16A34A]",
    warn: "bg-[#C4720A]",
    gray: "bg-[#C8CDD8]",
    blue: "bg-[#2563EB]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.75 rounded-full text-[11px] ${map[status]}`}
    >
      <span
        className={`w-1.25 h-1.25 rounded-full ${dotMap[status]}`}
      ></span>
      {label}
    </span>
  );
}

export default StatusPill;