import React from "react";
import Icon from "./Icon";

function Panel({
  title,
  icon,
  iconColor,
  count,
  children,
  actions,
  className = "",
}) {
  const iconColorMap = {
    blue: "bg-[#EEF3FF] text-[#2563EB]",
    green: "bg-[#EDFAF3] text-[#16A34A]",
    amber: "bg-[#FFF8EC] text-[#C4720A]",
    purple: "bg-[#F3F0FF] text-[#6D28D9]",
    gray: "bg-[#F3F4F6] text-[#5A6070]",
  };

  return (
    <div
      className={`bg-white border border-[#E2E5EB] rounded-[16px] overflow-hidden shadow-sm flex flex-col ${className}`}
    >
      <div className="px-[18px] py-[13px] border-b border-[#E2E5EB] flex items-center justify-between">
        <div className="flex items-center gap-[9px] text-[13px] font-semibold text-[#0D1117]">
          <div
            className={`w-[28px] h-[28px] rounded-[6px] flex items-center justify-center ${iconColorMap[iconColor]}`}
          >
            <Icon name={icon} />
          </div>

          {title}

          {count !== undefined && (
            <span className="bg-[#F3F4F6] text-[#5A6070] text-[11px] font-semibold px-[7px] py-[2px] rounded-full font-mono">
              {count}
            </span>
          )}

          <div className="flex gap-2">
            <button className="text-[12px] px-[11px] py-[5px] rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] cursor-pointer font-['DM Sans',sans-serif] transition-all duration-150">
              Export
            </button>
            <button className="text-[12px] px-[11px] py-[5px] rounded-[var(--radius-sm)] border border-[var(--blue)] bg-[var(--blue)] text-black cursor-pointer font-['DM Sans',sans-serif] transition-all duration-150">
              + New Workflow
            </button>
          </div>
        </div>

        {actions && <div className="flex gap-1.5">{actions}</div>}
      </div>

      {children}
    </div>
  );
}

export default Panel;
