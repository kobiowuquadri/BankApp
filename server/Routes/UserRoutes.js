const express = require('express')
const { SignIn, signUp } = require('../Controllers/userController.js')

const router = express.Router()

// Signin
router.post('/signin', SignIn)

// signup
router.post('/signup', signUp)

module.exports = router