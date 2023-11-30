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
import { signInAdmin } from '../../../../Hooks/Api/adminApi'


function LoginAdmin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
  
    const submitHandle = async e => {
      e.preventDefault()
  
      await signInAdmin({ email, password })
  
      navigate('/admin/dashboard')
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
                 Admin Login
                </p>
  
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
                  onClick={submitHandle}
                  style={{ backgroundColor: 'green' }}
                >
                  Register
                </MDBBtn>
                <p>
                  Already have an Account{' '}
                  <Link to={'/login'}>
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

export default LoginAdmin