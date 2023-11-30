import React, { useEffect, useState } from 'react'
import Slidebar from '../Slidebar/Sliderbar'
import '../Slidebar/slidebar.scss'
import axios from 'axios'

function CustomerDashboard() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getsingleuser'); 
      setUser(response.data.user); 
      console.log(response?.data)
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
   <div className='board'>
    <Slidebar/>
   <div className='main__board'>
   <h1 className='text-white'>WELCOME TO CUSTOMER DASHB0ARD</h1>
   {/* <p>{user.username}</p> */}
   </div>

   </div>
  )
}

export default CustomerDashboard