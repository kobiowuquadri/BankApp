import React, { useEffect, useState } from 'react'
import '../Slidebar/slidebar.scss'
import axios from 'axios'
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit'
import AdminSidebar from './AdminSidebar'

function AdminDashboard () {
  const [allUsers, setAllUsers] = useState([])

  const displayUsers = async () => {
    try {
      const adminAccessToken = localStorage.getItem('adminAccessToken')
      console.log(adminAccessToken)
      const response = await axios.get(
        'http://localhost:5000/api/v1/all-users',
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminAccessToken}`
          }
        }
      )
      console.log(response?.data?.users)
      setAllUsers(response?.data?.user)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    displayUsers()
  }, [])

  return (
    <div className='board'>
      <AdminSidebar />
      <div className='main__board'>
        <h1 className='text-white'>ADMIN DASHBOARD</h1>
        <MDBTable align='middle'>
          <MDBTableHead className='text-white'>
            <tr>
              <th scope='col text-white'>Name</th>
              <th scope='col text-white'>Role</th>
              <th scope='col text-white'>Acct Number</th>
              <th scope='col text-white'>Acct Balance</th>
            </tr>
          </MDBTableHead>

          <MDBTableBody>
            {allUsers.map((users, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1 text-white'>
                          {users.username}
                        </p>
                        <p className='mb-0 text-white'>{users.email}</p>
                        <p className='mb-0 text-white'>{users.address}</p>
                        <p className='mb-0 text-white'>{users.NIN_Number}</p>
                        <p className='mb-0 text-white'>{users.createdAt}</p>
                        <p className='mb-0 text-white'>{users.updatedAt}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1 text-white'>{users.role}</p>
                  </td>
                  <td>
                    <p className='fw-normal mb-1 text-white'>
                      {users.accountNumber == null
                        ? '-------------------'
                        : users.accountNumber}
                    </p>
                  </td>
                  {/* <td>
                    <MDBBadge color="success" pill>
                      Active
                    </MDBBadge>
                  </td> */}
                  <td>
                    <p className='fw-normal mb-1 text-white'>
                      {users.accountBalance}
                    </p>
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
