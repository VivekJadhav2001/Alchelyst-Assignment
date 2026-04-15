import React from 'react'
import OtherWorkflows from '../components/dashboard/OtherWorkflows'
import DATA from "../data/dummy.json"
function OtherWorkflowsPage() {
  const data = DATA.otherWorkflows
  return (
    <div>
      <OtherWorkflows data={data}/>
    </div>
  )
}

export default OtherWorkflowsPage