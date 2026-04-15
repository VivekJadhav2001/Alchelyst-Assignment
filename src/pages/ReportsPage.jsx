import React, { useState } from "react";
import Reports from "../components/dashboard/Reports";
import DATA from "../data/dummy.json";


function ReportsPage() {
  const data = DATA.reports;


  return (
    <div>
      <Reports data={data} />
    </div>
  );
}

export default ReportsPage;
