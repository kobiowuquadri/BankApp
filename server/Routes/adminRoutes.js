const express = require('express')
const adminRouter = express.Router()
const {signUpAdmin, signInAdmin, createUserAccount} = require('../Controllers/adminController')
const isAuthorized = require('../Middlewares/authMiddleware')

// signup admin
adminRouter.post('/signup-admin', signUpAdmin)
// signin admin
adminRouter.post('/signin-admin', isAuthorized, signInAdmin)

// create user
adminRouter.post('/create-user', createUserAccount)

module.exports = adminRouter