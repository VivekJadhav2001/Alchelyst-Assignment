import React from 'react'
import DATA from "../data/dummy.json"
import CapitalEvents from '../components/dashboard/CapitalEvents'

function CaptialEventsPage() {

  const data = DATA.capitalEvents
  return (
    <div>
      <CapitalEvents data={data}/>
    </div>
  )
}

export default CaptialEventsPage