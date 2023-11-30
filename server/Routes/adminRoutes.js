const express = require('express')
const adminRouter = express.Router()
const {signUpAdmin, signInAdmin, createUserAccount, showAllUsers, creditUserAccount} = require('../Controllers/adminController')
const isAuthorized = require('../Middlewares/authMiddleware')

// signup admin
adminRouter.post('/signup-admin', signUpAdmin)
// signin admin
adminRouter.post('/signin-admin', signInAdmin)

// create user
adminRouter.post('/create-user', isAuthorized, createUserAccount)

// all users
adminRouter.get('/all-users', isAuthorized, showAllUsers)

// creadit user
adminRouter.put('/credit-user', isAuthorized, creditUserAccount)

module.exports = adminRouter