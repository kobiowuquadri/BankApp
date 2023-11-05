import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import CustomerDashboard from './Pages/Dashboards/CustomerDashboard/CustomerDashboard';
import AdminDashboard from './Pages/Dashboards/AdminDashboard/AdminDashboard';
import { useAuth } from './Context/AuthContext';

function App() {
  const { user } = useAuth();
  console.log(user?.user?.role)

  useEffect(() => {
    if (user) {
      if (user.role === 'customer') {
        return <Navigate to={'/customerdashboard'} />;
      } else if (user.role === 'admin') {
        return <Navigate to={'/admindashboard'} />;
      }
    }
  }, [user]);

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/customerdashboard'
          element={user && user?.user?.role === 'customer' ? <CustomerDashboard /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/admindashboard'
          element={user && user?.user?.role === 'admin' ? <AdminDashboard /> : <Navigate to={'/login'} />}
        />
      </Routes>
    </>
  );
}

export default App;
