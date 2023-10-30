const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body

    // check if user exist
    const salt = await bcrypt.genSalt()
    const userPassword = await bcrypt.hash(password, salt)
    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exist' })
    }
    const newUser = new userModel({
      username,
      email,
      password: userPassword,
      role: 'customer'
    })
    newUser.save()
    res.status(201).json({ message: 'User Created Successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error creating a User' })
  }
}

const SignIn = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid Email or Password' });
    }

    // Compare password
    const isValidPass = await bcrypt.compare(password, user.password);

    // make a user an admin
    if (user.email === "kobiowuq@gmail.com"){
      user.role = "admin"
      await user.save()
    }

    if (!isValidPass) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    // JWT token for user authentication
    const token = jwt.sign(
      { userid: user._id, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: '2hr'
      }
    );

    res.status(200).json({ message: 'Authentication Successful', token });
  } catch (err) {
    console.error(err);
  }
}



module.exports = { SignIn, signUp }
