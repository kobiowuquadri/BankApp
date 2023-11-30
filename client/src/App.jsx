import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import CustomerDashboard from './Pages/Dashboards/CustomerDashboard/CustomerDashboard'
import AdminDashboard from './Pages/Dashboards/AdminDashboard/AdminDashboard'
import RegisterAdmin from './Pages/Dashboards/AdminDashboard/RegisterAdmin/RegisterAdmin'
import LoginAdmin from './Pages/Dashboards/AdminDashboard/LoginAdmin/LoginAdmin'
import CreateUser from './Pages/Dashboards/AdminDashboard/CreateUser/CreateUser'
import DepositUser from './Pages/Dashboards/AdminDashboard/DepositUser/DepositUser'
import CustomerLogin from './Pages/Dashboards/CustomerDashboard/CustomerLogin/CustomerLogin'

function App () {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/customer' element={<Outlet/>}>
          <Route index element={<CustomerLogin />} />
          <Route path='dashboard' element={<CustomerDashboard />} />
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
      </Routes>
    </>
  )
}

export default App
