import React from 'react'
import Payments from '../components/dashboard/Payments'
import DATA from "../data/dummy.json"
function PaymentsPage() {
  const data = DATA.payments
  return (
    <div>

      <Payments data={data}/>
    </div>
  )
}

export default PaymentsPage