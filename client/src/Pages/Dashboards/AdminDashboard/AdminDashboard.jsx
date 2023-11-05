import React, { useEffect, useState } from 'react'
import Slidebar from '../Slidebar/Sliderbar'
import axios from 'axios'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function AdminDashboard() {
  const [allUsers,setallUsers ] = useState([])

  const displayUsers = async () => {
    try{

      const response = await axios.get('http://localhost:5000/allusers')
      console.log(response?.data?.users)
      setallUsers(response?.data?.users)
    }
    catch(err){
      console.log(err.message)
    }
  }
  useEffect(() => {
    displayUsers()
  }, [])
  return (
    <div className='board'>
       <Slidebar/>
       <div className='main__board'>
       <h1 className='text-white'>ADMIN DASHBOARD</h1>
          <MDBTable align='middle'>
          <MDBTableHead className='text-white'>
            <tr>
              <th scope='col text-white'>Name</th>
              <th scope='col text-white'>Role</th>
              <th scope='col text-white'>Position</th>
              <th scope='col text-white'>Actions</th>
            </tr>
          </MDBTableHead>
    
          <MDBTableBody>
            
           {allUsers.map((user, index) => {
            return(
              <tr>
                <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1 text-white'>{user.username}</p>
                    <p className='mb-0 text-white'>{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1 text-white'>{user.role}</p>
              </td>
              <td>
                <MDBBadge color='success' pill>
                  Active
                </MDBBadge>
              </td>
              <td>
                <MDBBtn color='link' rounded size='sm'>
                  Edit
                </MDBBtn>
              </td>
              </tr>
            )
           })}
           
          
          </MDBTableBody>
        </MDBTable>
       </div>
    </div>
  )
}

export default AdminDashboard