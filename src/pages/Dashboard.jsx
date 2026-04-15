import React, { useCallback, useState } from "react";
import NavWorkflows from "../components/dashboard/NavWorkflows";
import OtherWorkflows from "../components/dashboard/OtherWorkflows";
import CapitalEvents from "../components/dashboard/CapitalEvents";
import Reports from "../components/dashboard/Reports";

import DATA from "../data/dummy.json"

function Dashboard({ activeTab,openModal }) {
  // if (activeTab !== "nav-workflows") return null;

    
  return (
    <div className="bg-[#F0F1F3] min-h-screen p-6 space-y-6">
  
  {/* Top Section */}
  <NavWorkflows data={DATA.navWorkflows} onRowClick={openModal} />

  {/* Middle Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <OtherWorkflows data={DATA.otherWorkflows} />
    <CapitalEvents />
  </div>

  {/* Bottom */}
  <Reports />
  
</div>
  );
}

export default Dashboard;