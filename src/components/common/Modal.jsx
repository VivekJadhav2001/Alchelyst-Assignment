import React, { useEffect, useState } from "react";

function Modal({ data, onClose }) {
  const [tab, setTab] = useState("Overview");
  const tabs = ["Overview", "Capital Balance", "Reconciliation", "NAV Pack"];

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const stepIcon = (status) => {
    if (status === "done")
      return { bg: "bg-[#EDFAF3]", text: "text-[#16A34A]", char: "✓" };
    if (status === "warn")
      return { bg: "bg-[#FFF8EC]", text: "text-[#C4720A]", char: "!" };
    return { bg: "bg-[#F3F4F6]", text: "text-[#9AA0AF]", char: "–" };
  };

  const amtClass = (v) => {
    if (typeof v === "string" && v.startsWith("+")) return "text-[#16A34A]";
    if (typeof v === "string" && v.startsWith("-")) return "text-[#DC2626]";
    return "text-[#5A6070]";
  };

  return (
    <div
      className="fixed inset-0 bg-[rgba(13,17,23,0.5)] backdrop-blur-sm z-[100] flex justify-center items-start p-[40px_20px] overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white border border-[#E2E5EB] rounded-[22px] w-full max-w-[940px] shadow-[0_20px_60px_rgba(0,0,0,0.16),0_8px_24px_rgba(0,0,0,0.08)] animate-[fadeIn_.2s_ease] m-auto">
        {/* Header */}
        <div className="px-[26px] py-[22px] border-b border-[#E2E5EB] flex justify-between items-start gap-4">
          <div>
            <div className="text-[17px] font-bold tracking-[-0.3px]">
              {data.title}
            </div>
            <div className="text-[12px] text-[#5A6070] mt-1 font-mono">
              {data.subtitle}
            </div>
          </div>

          <button
            className="w-8 h-8 border border-[#E2E5EB] rounded-[6px] flex items-center justify-center text-[18px] text-[#5A6070] hover:bg-[#F7F8FA] hover:text-[#0D1117]"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#E2E5EB] px-[26px]">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-[11px] text-[13px] border-b-2 ${
                t === tab
                  ? "text-[#2563EB] border-[#2563EB] font-semibold"
                  : "text-[#5A6070] border-transparent hover:text-[#0D1117]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-[24px_26px]">
          {tab === "Overview" && (
            <>
              {/* KPI */}
              <div className="grid grid-cols-4 gap-3 mb-6 max-[900px]:grid-cols-2">
                {data.kpis.map((k, i) => (
                  <div
                    key={i}
                    className="bg-[#F7F8FA] border border-[#E2E5EB] rounded-[10px] p-[14px_16px]"
                  >
                    <div className="text-[10.5px] font-bold uppercase tracking-[0.05em] text-[#9AA0AF] mb-1">
                      {k.label}
                    </div>
                    <div
                      className={`text-[22px] font-bold ${
                        k.warn ? "text-[#C4720A]" : "text-[#0D1117]"
                      }`}
                    >
                      {k.value}
                    </div>
                    <div className="text-[11px] text-[#9AA0AF] mt-1 font-mono">
                      {k.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Workflow Steps */}
              <div className="text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] mb-3 mt-5">
                Workflow steps
              </div>

              <div className="grid grid-cols-2 gap-2 max-[900px]:grid-cols-1">
                {data.workflowSteps.map((step, i) => {
                  const { bg, text, char } = stepIcon(step.status);

                  const statusLabels = {
                    done: "Completed",
                    warn: "Awaiting client",
                    gray: "Not started",
                  };

                  return (
                    <div
                      key={i}
                      className="border border-[#E2E5EB] rounded-[10px] p-[11px_14px] flex items-center gap-3 bg-white"
                    >
                      <div
                        className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-[12px] font-bold ${bg} ${text}`}
                      >
                        {char}
                      </div>

                      <div>
                        <div className="text-[13px] font-medium">
                          {step.name}
                        </div>
                        <div
                          className={`text-[11px] mt-[1px] ${
                            step.status === "warn"
                              ? "text-[#C4720A]"
                              : "text-[#9AA0AF]"
                          }`}
                        >
                          {statusLabels[step.status] || step.status}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Investor Table */}
              <div className="text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] mb-3 mt-6">
                Investor capital tracking
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#F7F8FA]">
                      {[
                        "Investor",
                        "Opening bal.",
                        "Subscriptions",
                        "Redemptions",
                        "P&L alloc.",
                        "Fees",
                        "Closing bal.",
                        "Status",
                      ].map((h, i) => (
                        <th
                          key={i}
                          className={`px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] border-b border-[#E2E5EB] ${
                            i === 0
                              ? "text-left"
                              : i === 7
                                ? "text-center"
                                : "text-right"
                          }`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {data.investors.map((inv, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#E2E5EB] hover:bg-[#F7F8FA]"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-left">
                          {inv.name}
                        </td>

                        {[
                          inv.opening,
                          inv.subscriptions,
                          inv.redemptions,
                          inv.pnl,
                          inv.fees,
                        ].map((val, idx) => (
                          <td
                            key={idx}
                            className={`px-4 py-3 text-[12px] font-mono text-right ${amtClass(
                              val,
                            )}`}
                          >
                            {val}
                          </td>
                        ))}

                        <td className="px-4 py-3 text-[12px] font-mono font-bold text-right">
                          {inv.closing}
                        </td>

                        <td className="px-4 py-3 text-center">
                          <span className="inline-block px-2 py-[2px] rounded-full text-[10px] font-bold bg-[#EDFAF3] text-[#166534]">
                            {inv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {tab !== "Overview" && (
            <div className="text-center py-12 text-[#9AA0AF] font-mono text-[13px]">
              {tab} data coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
