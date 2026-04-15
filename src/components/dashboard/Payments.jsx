import React from "react";
import Panel from "../common/Panel";
import StatusTag from "../common/StatusTag";

function Payments({ data }) {
  return (
    <div>
      <Panel
        title={data.title}
        icon={data.icon}
        iconColor={data.iconColor}
        count={data.count}
        className="col-span-full"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* HEAD */}
            <thead>
              <tr className="bg-[#F7F8FA]">
                {[
                  "ID",
                  "Type",
                  "Value date",
                  "Amount",
                  "Description",
                  "Status",
                ].map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-2 text-left text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] border-b border-[#E2E5EB]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#E2E5EB] hover:bg-[#F7F8FA]"
                >
                  {/* ID */}
                  <td className="px-4 py-3 text-[11.5px] text-[#9AA0AF] font-mono">
                    {row.id}
                  </td>

                  {/* TYPE */}
                  <td className="px-4 py-3">
                    <span className="text-[13px] font-semibold text-[#0D1117]">
                      {row.type}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="px-4 py-3">
                    <span className="text-[12px] text-[#5A6070] font-mono whitespace-nowrap">
                      {row.valueDate}
                    </span>
                  </td>

                  {/* AMOUNT */}
                  <td className="px-4 py-3">
                    <span className="text-[12px] font-mono font-medium text-[#5A6070]">
                      {row.amount}
                    </span>
                  </td>

                  {/* DESCRIPTION */}
                  <td className="px-4 py-3 text-[12px] text-[#5A6070] max-w-55 truncate">
                    {row.description}
                  </td>

                  {/* STATUS */}
                  <td className="px-4 py-3">
                    <StatusTag status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="px-4.5 py-2.5 border-t border-[#E2E5EB] bg-[#F7F8FA] flex items-center justify-between">
          <span className="text-[11px] text-[#9AA0AF] font-mono">
            1–{data.rows.length} of {data.rows.length}
          </span>
        </div>
      </Panel>
    </div>
  );
}

export default Payments;
