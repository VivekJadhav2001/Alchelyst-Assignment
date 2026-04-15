import React, { useState } from 'react'
import PanelFooter from '../components/common/PanelFooter';
import StatusPill from '../components/common/StatusPill';
import ProgressBar from '../components/common/ProgressBar';
import DATA from '../data/dummy.json'
import Panel from '../components/common/Panel';

function NavOverview() {
  const data = DATA.navWorkflows

  console.log(data,"")

  const [page, setPage] = useState(1);

  const perPage = 5;

  // calculate start index
  const startIndex = (page - 1) * perPage;

  // calculate end index
  const endIndex = page * perPage;

  // get rows for current page
  const rows = data.rows.slice(startIndex, endIndex);

  // for showing "1–3 of 10"
  const start = startIndex + 1;
  const end = endIndex > data.rows.length ? data.rows.length : endIndex;

  return (
    <Panel
      title={data.title}
      icon={data.icon}
      iconColor={data.iconColor}
      count={data.rows.length}
      className="col-span-full"
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F7F8FA]">
              <th className="px-4 py-2 text-left text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] border-b border-[#E2E5EB]">
                Fund
              </th>
              <th className="px-4 py-2 text-left text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] border-b border-[#E2E5EB]">
                Workflow
              </th>
              <th className="px-4 py-2 text-left text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] border-b border-[#E2E5EB]">
                Value date
              </th>
              <th className="px-4 py-2 text-left text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] border-b border-[#E2E5EB]">
                Progress
              </th>
              <th className="px-4 py-2 text-left text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#9AA0AF] border-b border-[#E2E5EB]">
                Step status
              </th>
              <th className="px-4 py-2 border-b border-[#E2E5EB]"></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#E2E5EB] hover:bg-[#F7F8FA] cursor-pointer"
              >
                <td className="px-4 py-3 min-w-40">
                  <div className="font-semibold text-[13px] group-hover:text-[#2563EB]">
                    {row.fund.name}
                  </div>
                  <div className="text-[11px] text-[#9AA0AF] mt-px max-w-35 truncate">
                    {row.fund.sub}
                  </div>
                </td>

                <td className="px-4 py-3">
                  <span className="text-[13px] text-[#5A6070]">
                    {row.workflow}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span className="text-[12px] text-[#5A6070] font-mono whitespace-nowrap">
                    {row.valueDate}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <ProgressBar value={row.progress} color={row.progressColor} />
                </td>

                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1 max-w-[320px]">
                    {row.steps.map((s, i) => (
                      <StatusPill key={i} label={s.label} status={s.status} />
                    ))}
                  </div>
                </td>

                <td className="px-4 py-3 text-[#9AA0AF] text-[16px] w-6 text-center hover:text-[#2563EB]">
                  ›
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PanelFooter
        info={`Showing ${start}–${end} of ${data.rows.length} workflows`}
        totalRows={data.rows.length}
        page={page}
        setPage={setPage}
        perPage={perPage}
      />
    </Panel>
  );
}

export default NavOverview