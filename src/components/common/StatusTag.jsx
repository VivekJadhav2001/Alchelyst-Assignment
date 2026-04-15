import React from "react";

function StatusTag({ status }) {
  const map = {
    delivered: {
      label: "Delivered",
      cls: "bg-[#EDFAF3] text-[#166534]",
    },
    initiated: {
      label: "Initiated",
      cls: "bg-[#FFF8EC] text-[#92400e]",
    },
    review: {
      label: "Oversight review",
      cls: "bg-[#F3F0FF] text-[#5b21b6]",
    },
    client: {
      label: "Client review",
      cls: "bg-[#EEF3FF] text-[#1e40af]",
    },
    pending: {
      label: "Pending",
      cls: "bg-[#F3F4F6] text-[#5A6070]",
    },
  };

  const { label, cls } = map[status] || map["pending"];

  return (
    <span
      className={`inline-flex items-center text-[11px] font-semibold px-2.25 py-0.75 rounded-full tracking-[0.02em] ${cls}`}
    >
      {label}
    </span>
  );
}

export default StatusTag;