const express = require('express')
const { signInUser, creditAnotherUser } = require('../Controllers/userController.js')
const userRouter = express.Router()

// // Signin
userRouter.post('/signin', signInUser)

// credit other user
userRouter.put('tranfer-funds', creditAnotherUser)

module.exports = userRouter