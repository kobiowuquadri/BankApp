import React, {useState} from 'react'
import loginBg from '../../../../assets/images/bg_login.jpeg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit'
import { createNewUser } from '../../../../Hooks/Api/adminApi'
import AdminSidebar from '../AdminSidebar'

function CreateUser() {

    const [role, setRole] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [NIN_Number, setNIN_Number] = useState('')
    const [address, setAddress] = useState('')
    // const navigate = useNavigate()
  
    const submitHandle = async () => {
  
      await createNewUser({ role, username, email, address, NIN_Number })
  
      alert('User Created Successfully')
    }

  return (
    <div className='board'>
      <AdminSidebar/>
      <div className='main__board'>
      <MDBContainer fluid className=''>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md='10'
              lg='6'
              className='order-2 order-lg-1 d-flex flex-column align-items-center'
            >
           
              <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                Create New User
              </p>

              <div className='d-flex flex-row align-items-center mb-4 '>
                <MDBIcon fas icon='user me-3' size='lg' />
                <MDBInput
                  label='Your Role'
                  id='form1'
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  name='role'
                  type='text'
                  className='w-100'
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4 '>
              <MDBIcon fas icon="user-circle me-3" size='lg' />
                <MDBInput
                  label='Your Name'
                  id='form1'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  name='username'
                  type='text'
                  className='w-100'
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput
                  label='Your Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  name='email'
                  id='form2'
                  type='email'
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
              <MDBIcon fas icon="map-marker-alt me-3" size='lg' />
                <MDBInput
                  label='Your Address'
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  name='address'
                  id='form2'
                  type='text'
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput
                  label='NIN_Number'
                  value={NIN_Number}
                  onChange={e => setNIN_Number(e.target.value)}
                  name='NIN_Number'
                  id='form3'
                  type='number'
                />
              </div>

              <MDBBtn
                className='mb-4'
                size='lg'
                style={{ backgroundColor: 'green' }}
                onClick={submitHandle}
              >
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md='10'
              lg='6'
              className='order-1 order-lg-2 d-flex align-items-center'
            >
              <MDBCardImage src={loginBg} fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
      </div>
    </div>
   
  )
}

export default CreateUser