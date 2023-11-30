import React, { useState } from 'react'
import loginBg from '../../../../assets/images/bg_login.jpeg'
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
import { depositUser } from '../../../../Hooks/Api/staffApi'
import StaffSidebar from '../StaffSideBar'

function StaffDepositUser () {
  const [accountNumber, setAccountNumber] = useState('')
  const [amount, setAmount] = useState('')
  // const navigate = useNavigate()

  const submitHandle = async e => {
    e.preventDefault()

    await depositUser({ accountNumber, amount })

    //   navigate('/admin/dashboard')
    alert('Deposit Successfully')
  }

  return (
    <div className='board'>
      <StaffSidebar />

      <div className='main__board'>
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
                    Deposit User
                  </p>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='envelope me-3' size='lg' />
                    <MDBInput
                      label='User Account Number'
                      value={accountNumber}
                      onChange={e => setAccountNumber(e.target.value)}
                      name='accountNumber'
                      id='form2'
                      type='number'
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='lock me-3' size='lg' />
                    <MDBInput
                      label='Amount'
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      name='amount'
                      id='form3'
                      type='number'
                    />
                  </div>

                  <MDBBtn
                    className='mb-4'
                    size='lg'
                    onClick={submitHandle}
                    style={{ backgroundColor: 'green' }}
                  >
                    Deposit
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

export default StaffDepositUser
