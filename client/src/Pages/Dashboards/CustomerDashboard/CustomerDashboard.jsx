import React, { useEffect, useState } from 'react'
import Slidebar from '../Slidebar/Sliderbar'
import '../Slidebar/slidebar.scss'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit'

function CustomerDashboard () {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const accountNumber = currentUser.accountNumber
  const username = currentUser.username
  const accountBalance = currentUser.accountBalance
  const address = currentUser.address
  const email = currentUser.email
  const NIN_Number = currentUser.NIN_Number


  return (
    <div className='board'>
      <Slidebar />
      <div className='main__board'>
        <section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className='py-5'>
            <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
                  <MDBBreadcrumbItem>
                    <a href='#'>Home</a>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem>
                    <a href='#'>User</a>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol lg='4'>
                <MDBCard className='mb-4'>
                  <MDBCardBody className='text-center'>
                    <MDBCardImage
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                      alt='avatar'
                      className='rounded-circle'
                      style={{ width: '150px' }}
                      fluid
                    />
                    <p className='text-muted mb-1'>Full Stack Developer</p>
                    <p className='text-muted mb-4'>
                      {address}
                    </p>
                    <div className='d-flex justify-content-center mb-2'>
                      <MDBBtn>Follow</MDBBtn>
                      <MDBBtn outline className='ms-1'>
                        Message
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className='mb-4 mb-lg-0'>
                  <MDBCardBody className='p-0'>
                    <MDBListGroup flush className='rounded-3'>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon fas icon='globe fa-lg text-warning' />
                        <MDBCardText>https://easybank.com</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon
                          fab
                          icon='github fa-lg'
                          style={{ color: '#333333' }}
                        />
                        <MDBCardText>easybank</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon
                          fab
                          icon='twitter fa-lg'
                          style={{ color: '#55acee' }}
                        />
                        <MDBCardText>@easybank</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon
                          fab
                          icon='instagram fa-lg'
                          style={{ color: '#ac2bac' }}
                        />
                        <MDBCardText>easybank</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon
                          fab
                          icon='facebook fa-lg'
                          style={{ color: '#3b5998' }}
                        />
                        <MDBCardText>easybank</MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg='8'>
                <MDBCard className='mb-4'>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {username}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {email}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Account Number</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {accountNumber}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Account Balance</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {`$ ${accountBalance}`} 
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {address}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>NIN Number</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {NIN_Number}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
                 <hr/>
               
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </div>
  )
}

export default CustomerDashboard
