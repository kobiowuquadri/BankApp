import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Routes>
         <Route index element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
