import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import CustomerDashboard from './Pages/Dashboards/CustomerDashboard/CustomerDashboard'

function App() {

  return (
    <>
      <Routes>
         <Route index element={<Home/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/customerdashboard' element={<CustomerDashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
