import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import CustomerDashboard from './Pages/Dashboards/CustomerDashboard/CustomerDashboard'
import AdminDashboard from './Pages/Dashboards/AdminDashboard/AdminDashboard'
import RegisterAdmin from './Pages/Dashboards/AdminDashboard/RegisterAdmin/RegisterAdmin'
import LoginAdmin from './Pages/Dashboards/AdminDashboard/LoginAdmin/LoginAdmin'
import CreateUser from './Pages/Dashboards/AdminDashboard/CreateUser/CreateUser'
import DepositUser from './Pages/Dashboards/AdminDashboard/DepositUser/DepositUser'
import CustomerLogin from './Pages/Dashboards/CustomerDashboard/CustomerLogin/CustomerLogin'
import Transfer from './Pages/Dashboards/CustomerDashboard/Transfer/Transfer'
import StaffLogin from './Pages/Dashboards/StaffDashboard/StaffLogin/StaffLogin'
import StaffDashboard from './Pages/Dashboards/StaffDashboard/StaffDashboard'
import StaffCreateUser from './Pages/Dashboards/StaffDashboard/CreateUser/CreateUser'
import StaffDepositUser from './Pages/Dashboards/StaffDashboard/DepositUser/DepositUser'

function App () {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/customer' element={<Outlet/>}>
          <Route index element={<CustomerLogin />} />
          <Route path='dashboard' element={<CustomerDashboard />} />
          <Route path='transfer' element={<Transfer />} />
        </Route>
        <Route path='/admin' element={<Outlet />}>
          <Route index element={<RegisterAdmin />}></Route>
          <Route path='login' element={<LoginAdmin />}></Route>
          <Route path='dashboard' element={<Outlet />}>
            <Route index element={<AdminDashboard />}></Route>
            <Route path='createuser' element={<CreateUser />}></Route>
            <Route path='deposituser' element={<DepositUser />}></Route>
          </Route>
        </Route>
        <Route path='/staff' element={<Outlet />}>
          <Route index element={<StaffLogin />}></Route>
          <Route path='dashboard' element={<Outlet />}>
            <Route index element={<StaffDashboard  />}></Route>
            <Route path='createuser' element={<StaffCreateUser />}></Route>
            <Route path='deposituser' element={<StaffDepositUser />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
