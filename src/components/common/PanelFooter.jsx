import React from "react";

function PanelFooter({ info, totalRows, page, perPage, setPage }) {
  const pageCount = Math.ceil(totalRows / perPage);

  return (
    <div className="px-4.5 py-2.5 border-t border-[#E2E5EB] flex items-center justify-between bg-[#F7F8FA]">
      <span className="text-[11px] text-[#9AA0AF] font-mono">{info}</span>

      {pageCount > 1 && (
        <div className="flex gap-1">
          <button
            className="min-w-6.5 h-6.5 border border-[#E2E5EB] rounded-md flex items-center justify-center text-[11px] text-[#5A6070] hover:bg-[#F7F8FA]"
            onClick={() => setPage(1)}
          >
            «
          </button>

          <button
            className="min-w-6.5 h-6.5 border border-[#E2E5EB] rounded-md flex items-center justify-center text-[11px] text-[#5A6070] hover:bg-[#F7F8FA]"
            onClick={() => setPage(Math.max(1, page - 1))}
          >
            ‹
          </button>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={`min-w-6.5 h-6.5 border rounded-md flex items-center justify-center text-[11px] font-mono ${
                p === page
                  ? "bg-[#2563EB] text-white border-[#2563EB] font-semibold"
                  : "border-[#E2E5EB] text-[#5A6070] hover:bg-[#F7F8FA]"
              }`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}

          <button
            className="min-w-6.5 h-6.5 border border-[#E2E5EB] rounded-md flex items-center justify-center text-[11px] text-[#5A6070] hover:bg-[#F7F8FA]"
            onClick={() => setPage(Math.min(pageCount, page + 1))}
          >
            ›
          </button>

          <button
            className="min-w-6.5 h-6.5 border border-[#E2E5EB] rounded-md flex items-center justify-center text-[11px] text-[#5A6070] hover:bg-[#F7F8FA]"
            onClick={() => setPage(pageCount)}
          >
            »
          </button>
        </div>
      )}
    </div>
  );
}

export default PanelFooter;
