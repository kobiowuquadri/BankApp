import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import CustomerDashboard from './Pages/Dashboards/CustomerDashboard/CustomerDashboard'
import AdminDashboard from './Pages/Dashboards/AdminDashboard/AdminDashboard'
import RegisterAdmin from './Pages/Dashboards/AdminDashboard/RegisterAdmin/RegisterAdmin'
import LoginAdmin from './Pages/Dashboards/AdminDashboard/LoginAdmin/LoginAdmin'
import { useAuth } from './Context/AuthContext'
import CreateStaff from './Pages/Dashboards/AdminDashboard/CreateStaff'

function App () {
  // const { user } = useAuth()
  // console.log(user?.user?.role)

  // useEffect(() => {
  //   if (user) {
  //     if (user.role === 'customer') {
  //       return <Navigate to={'/customerdashboard'} />
  //     } else if (user.role === 'admin') {
  //       return <Navigate to={'/admindashboard'} />
  //     }
  //   }
  // }, [user])

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route
          path='/customerdashboard'
          element={
            user && user?.user?.role === 'customer' ? (
              <CustomerDashboard />
            ) : (
              <Navigate to={'/login'} />
            )
          }
        >
        </Route> */}
        <Route path='admin' element={<Outlet />}>
          <Route index element={<RegisterAdmin/>}></Route>
          <Route path='login' element={<LoginAdmin/>}></Route>
          <Route path='dashboard' element={<AdminDashboard/>}></Route>
           {/* <Route path='login' element={user && user?.user?.role === 'admin' ? <AdminDashboard /> : <Navigate to={'/login'}/>}></Route> */}
           {/* <Route path='createstaff' element={user && user?.user?.role === 'admin' ? <CreateStaff/> : <Navigate to={'/login'}/>}></Route> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
