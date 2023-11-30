const express = require('express')
const  staffRouter = express.Router()
const {signInStaff, createUserAccount, creditUserAccount, showAllUsers} = require('../Controllers/staffController')
const isAuthorized = require('../Middlewares/authMiddleware')

// signin admin
staffRouter.post('/signin-staff', signInStaff)

// create user
staffRouter.post('/create-user', isAuthorized, createUserAccount)

// all users
staffRouter.get('/all-users', isAuthorized, showAllUsers)

// creadit user
staffRouter.put('/credit-user', isAuthorized, creditUserAccount)

module.exports = staffRouter