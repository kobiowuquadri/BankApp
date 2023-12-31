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
import { signUpAdmin } from '../../../../Hooks/Api/adminApi'

function RegisterAdmin () {
  const [role, setRole] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  const submitHandle = async () => {

    await signUpAdmin({ role, username, email, password, address })

    navigate('/admin/login')
  }

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md='10'
              lg='6'
              className='order-2 order-lg-1 d-flex flex-column align-items-center'
            >
           
              <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                Register New Admin
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
                  label='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  name='password'
                  id='form3'
                  type='password'
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
              <p>
                Already have an Account{' '}
                <Link to={'/admin/login'}>
                  <b style={{ borderBottom: '2px solid green' }}>
                    Login to your account
                  </b>
                </Link>{' '}
              </p>
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
  )
}

export default RegisterAdmin
