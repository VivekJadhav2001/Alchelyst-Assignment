import React, { useState } from "react";
import Panel from "../common/Panel";
import StatusTag from "../common/StatusTag";
import PanelFooter from "../common/PanelFooter";

function OtherWorkflows({ data }) {

  const [page, setPage] = useState(1);

const perPage = 3;

// calculate start index
const startIndex = (page - 1) * perPage;

// calculate end index
const endIndex = page * perPage;

// get rows for current page
const rows = data.rows.slice(startIndex, endIndex);

// for showing "1–3 of 10"
const start = startIndex + 1;
const end = endIndex > data.rows.length ? data.rows.length : endIndex;

  console.log(data,"otherWorkflow")
  return (
    <div>
      <Panel
        title={data.title}
        icon={data.icon}
        iconColor={data.iconColor}
        count={data.count}
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* TABLE HEAD */}
            <thead>
              <tr className="bg-[#F7F8FA]">
                {["Fund", "Name", "Value date", "Status"].map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-2 text-left text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] border-b border-[#E2E5EB]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#E2E5EB] hover:bg-[#F7F8FA]"
                >
                  {/* FUND */}
                  <td className="px-4 py-3">
                    <div className="font-semibold text-[13px] text-[#0D1117]">
                      {row.fund.name}
                    </div>
                    <div className="text-[11px] text-[#9AA0AF] mt-[1px] max-w-[140px] truncate">
                      {row.fund.sub}
                    </div>
                  </td>

                  {/* NAME */}
                  <td className="px-4 py-3">
                    <span className="text-[13px] text-[#5A6070]">
                      {row.name}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="px-4 py-3">
                    <span className="text-[12px] text-[#5A6070] font-mono whitespace-nowrap">
                      {row.valueDate}
                    </span>
                  </td>

                  {/* STATUS TAGS */}
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-1">
                      {row.tags.map((tag, i) => (
                        <StatusTag
                          key={i}
                          status={tag.type}
                          label={tag.label}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}

        <PanelFooter
        info={`Showing ${start}–${end} of ${data.rows.length} workflows`}
        totalRows={data.rows.length}
        page={page}
        setPage={setPage}
        perPage={perPage}
        />
      </Panel>
    </div>
  );
}

export default OtherWorkflows;
