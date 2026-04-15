import React from "react";
import Icon from "./Icon";
import { exportToExcel } from "../../utils/exportToExcel";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function Panel({
  title,
  icon,
  iconColor,
  count,
  children,
  actions,
  className = "",
  dataType,
  data,
}) {
  const iconColorMap = {
    blue: "bg-[#EEF3FF] text-[#2563EB]",
    green: "bg-[#EDFAF3] text-[#16A34A]",
    amber: "bg-[#FFF8EC] text-[#C4720A]",
    purple: "bg-[#F3F0FF] text-[#6D28D9]",
    gray: "bg-[#F3F4F6] text-[#5A6070]",
  };

  const location = useLocation();

  // console.log(location,"LOCATION", location.pathname !=="/nav-workflows")

  function exportFile() {
    try {
      if (dataType !== "navWorkflows") {
        toast.error("Export not supported for this panel");
        return;
      }

      const formatted = data.rows.map((item) => ({
        id: item.id,
        fundName: item.fund?.name,
        fundSub: item.fund?.sub,
        workflow: item.workflow,
        valueDate: item.valueDate,
        progress: item.progress,
        status: item.steps?.map((s) => s.label).join(", "),
      }));

      exportToExcel(formatted, dataType);

      toast.success("Successfully Exported As Excel", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Unable To Export", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div
      className={`bg-white border border-[#E2E5EB] rounded-2xl overflow-hidden shadow-sm flex flex-col ${className}`}
    >
      <div className="px-4.5 py-3.25 border-b border-[#E2E5EB] flex items-center justify-between">
        <div className="flex items-center gap-2.25 text-[13px] font-semibold text-[#0D1117]">
          <div
            className={`w-7 h-7 rounded-md flex items-center justify-center ${iconColorMap[iconColor]}`}
          >
            <Icon name={icon} />
          </div>

          {title}

          {count !== undefined && (
            <span className="bg-[#F3F4F6] text-[#5A6070] text-[11px] font-semibold px-1.75 py-0.5 rounded-full font-mono">
              {count}
            </span>
          )}

          {title === "Portfolio Dashboard" && location.pathname === "/" && (
            <div className="flex gap-2">
              <button
                type="button"
                className="text-[12px] px-2.75 py-1.25 rounded-sm border border-(--border) bg-(--surface) text-(--text-secondary) cursor-pointer font-['DM Sans',sans-serif] transition-all duration-150
                hover:bg-blue-600
                hover:text-white
                "
                onClick={exportFile}
              >
                Export
              </button>
              <button
                className="text-[12px] px-2.75 py-1.25 rounded-sm border border-(--border) bg-(--surface) text-(--text-secondary) cursor-pointer font-['DM Sans',sans-serif] transition-all duration-150
                hover:bg-blue-600
                hover:text-white"
              >
                + New Workflow
              </button>
            </div>
          )}
        </div>

        {actions && <div className="flex gap-1.5">{actions}</div>}
      </div>

      {children}
    </div>
  );
}

export default Panel;
