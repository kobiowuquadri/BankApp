const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {generateAccctNumber} = require('../Utils/generateAcctNumber')
const nodemailer = require("nodemailer");



const period = 1000 * 60 * 60 * 24 * 3


const signInStaff = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid Email or Password' });
      }
  
      const isValidPass = await bcrypt.compare(password, user.password);
  
      if (!isValidPass) {
        return res.status(401).json({ message: 'Invalid Password' });
      }
  
      jwt.sign(
        { userid: user._id },
        process.env.SECRET_KEY,
        {
          expiresIn: '1d',
        },
        async (err, token) => {
          if (err) {
            throw new Error(err);
          }
          res.cookie('staffId', user._id, { maxAge: period, httpOnly: true });
          res.status(200).json({
            success: true,
            message: 'Authentication Successful',
            user,
          });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(404).json({
        success: false,
        msg: err.message,
      });
    }
  };



const createUserAccount = async (req, res) => {
    try{
       const {role, username, email, address, NIN_Number} = req.body
       const acctNumber = await generateAccctNumber()
       console.log(acctNumber)
       const hashPassword = await bcrypt.hash(acctNumber.toString(), 10)
       const newUser = new userModel({
        role,
        username,
        email,
        address,
        NIN_Number,
        accountNumber: acctNumber,
        password:hashPassword
       })
      //  const isExistingAcctNumber = await userModel.findOne({accountNumber})
      //  if(isExistingAcctNumber){
      //   return res.status(409).send({message: 'This account number already exists.'})
      //  }
       const savedUser = await newUser.save()

       const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD
        },
      });

      const info = await transporter.sendMail({
        from: '"Easy Bank 👻" <noreply@example.com>', // sender address
        to: email, // list of receivers
        subject: "Account Created Successfully", // Subject line
        html: `
        <p>Hello ${username},</p>
        <p>Your account has been created successfully.</p>
        <p>Your account number is ${acctNumber}.</p>
        <p>Note: Your Account Number, ${acctNumber} is your initial password.</p>
        <p>Click <a href="https://yourwebsite.com/update-password">here</a> to log in and update your password.</p>
    `
      });
    
      console.log("Message sent: %s", info.messageId);

       res.status(201).json({success: true, message:"User Created Successfully", savedUser})
    }
    catch(err) {
    console.log(err)
    res.status(400).json({success: false, msg: err.message})
    }
}

const showAllUsers = async (req, res) => {
  try{
     const user = await userModel.find()
     res.status(200).json({success: true, message: "all users", user})
  }
  catch(err){
    console.log(err.message)
  }
}

const creditUserAccount = async (req, res)=> {
  try{
     const {accountNumber, amount} = req.body
     let user = await userModel.findOne({accountNumber});
     const prevBalance = user.accountBalance
     const newBalance = prevBalance + Number(amount)
     if(user){
       let updatedAcctBanlance = await userModel.findOneAndUpdate({accountNumber}, {
        accountBalance: newBalance
      })
      res.status(202).json({
        success: true,
        updatedAcctBanlance
      })
     }else {
      throw new Error('This user does not exist.')
     }
  }
  catch(err){
    res.status(400).json({success: false, msg: err.message})
  }
}



module.exports = {signInStaff, createUserAccount, creditUserAccount, showAllUsers}