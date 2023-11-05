import React, { useState, useEffect } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import loginBg from '../../assets/images/bg_login.jpeg'
import { Link, json } from 'react-router-dom'
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
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 
'react-router-dom';
import { useAuth } from '../../Context/AuthContext'


function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()
  


  const submitHandle = async e => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:5000/signin', {
        email,
        password
      });

      const user = response.data;
      login(user);
      console.log(user);

      if (user?.user?.role === 'customer') {
        navigate('/customerdashboard');
      } else if (user?.user?.role === 'admin') {
        navigate('/admindashboard');
      }
    } catch (err) {
      alert('Wrong Credentials');
      console.error(err.message);
    }
  }

  return (
    <MDBContainer
      fluid
      className='d-flex min-vh-100 align-items-center justify-content-center'
    >
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md='10'
              lg='6'
              className='order-2 order-lg-1 d-flex flex-column align-items-center'
            >
              <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                LogIn
              </p>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  label='Your Email'
                  name='email'
                  id='form2'
                  type='email'
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  label='Password'
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
                Login
              </MDBBtn>
              <p>
                Don't have an Account{' '}
                <Link to={'/register'}>
                  <b style={{ borderBottom: '2px solid green' }}>
                    Create Account
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

export default Login
