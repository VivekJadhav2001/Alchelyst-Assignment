import React, { useState } from "react";
import DATA from "../../data/dummy.json";
import Topbar from "./Topbar";
import Filterbar from "./Filterbar";
function Navbar({activeTab,setActiveTab,activeChip,setActiveChip,search,setSearch}) {
  

  return (
    <div>
      <Topbar
        navTabs={DATA.navTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={DATA.meta.user}
        date={DATA.meta.dateRange}
      />
      <Filterbar
        chips={DATA.filterChips}
        activeChip={activeChip}
        setActiveChip={setActiveChip}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default Navbar;
