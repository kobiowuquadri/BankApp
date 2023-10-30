import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import CustomerDashboard from './Pages/Dashboards/CustomerDashboard/CustomerDashboard'
import AdminDashboard from './Pages/Dashboards/AdminDashboard/AdminDashboard'


function App () {
  const loggedUser = JSON.parse(localStorage.getItem("customer"))
  console.log(loggedUser)

  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route
          path='/customerdashboard'
          element={loggedUser && loggedUser.role === "customer" ? <CustomerDashboard/> :<Navigate to={'/login'}/> }
        ></Route>
        <Route path='/admindashboard' element={loggedUser && loggedUser.role === "admin" ? <AdminDashboard/> : <Navigate to={'/login'}/>}></Route>
      </Routes>
    </>
  )
}

export default App
