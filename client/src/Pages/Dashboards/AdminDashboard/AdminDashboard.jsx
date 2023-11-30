import React, { useEffect, useState } from 'react';
import '../Slidebar/slidebar.scss';
import axios from 'axios';
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from 'mdb-react-ui-kit';
import AdminSidebar from './AdminSidebar';

function AdminDashboard() {
  // const [allUsers, setAllUsers] = useState([]);

  // const displayUsers = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/allusers');
  //     console.log(response?.data?.users);
  //     setAllUsers(response?.data?.users);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // const newRole = 'staff'; 
  // const updateUserRole = async (id, newRole) => {
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:5000/updateuserrole/${id}`,
  //       { id, role: newRole },
  //     );
  //     console.log(response?.data);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };
  

  // useEffect(() => {
  //   displayUsers();
  // }, []);

  return (
    <div className="board">
      <AdminSidebar />
      <div className="main__board">
        <h1 className="text-white">ADMIN DASHBOARD</h1>
        <MDBTable align="middle">
          <MDBTableHead className="text-white">
            <tr>
              <th scope="col text-white">Name</th>
              <th scope="col text-white">Role</th>
              <th scope="col text-white">Position</th>
              <th scope="col text-white">Actions</th>
            </tr>
          </MDBTableHead>

          {/* <MDBTableBody>
            {allUsers.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1 text-white">
                          {user.username}
                        </p>
                        <p className="mb-0 text-white">{user.email}</p>
                        <p className="mb-0 text-white">{user.accountNumber}</p>
                        <p className="mb-0 text-white">{user.balance}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1 text-white">{user.role}</p>
                  </td>
                  <td>
                    <MDBBadge color="success" pill>
                      Active
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBtn
                      color="primary"
                      rounded
                      size="sm"
                      onClick={() => updateUserRole(user._id, newRole)}
                    >
                      Make Staff
                    </MDBBtn>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
           */}
        </MDBTable> 
      </div>
    </div>
  );
}

export default AdminDashboard;
