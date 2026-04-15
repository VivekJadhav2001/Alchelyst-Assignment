import React from "react";
import DATA from "../../data/dummy.json";
import Topbar from "./Topbar";
import StatBar from "./StatBar";

function Navbar({ activeTab, setActiveTab, search, setSearch }) {
  return (
    <div>
      <Topbar
        navTabs={DATA.navTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={DATA.meta.user}
        date={DATA.meta.dateRange}
      />
      <StatBar
        navWorkflowsCount={DATA.navWorkflows.rows.length}
        otherWorkflowsCount={DATA.otherWorkflows.rows.length}
        capitalEventsCount={DATA.capitalEvents.rows.length}
        reportsCount={DATA.reports.rows.length}
        paymentsCount={DATA.payments.rows.length}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default Navbar;