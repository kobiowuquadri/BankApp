import React from 'react'
import Slidebar from '../Slidebar/Sliderbar'
import AccountNumberGenerator from '../../../Components/AccountNumberGenerator/AccountNumberGenerator'

function CustomerDashboard() {
  return (
   <div>
    <Slidebar/>
    <h1>WELCOME TO CUSTOMER DASHB0ARD</h1>
     {/* <p>Account NO: {<AccountNumberGenerator/>}</p> */}
   </div>
  )
}

export default CustomerDashboard