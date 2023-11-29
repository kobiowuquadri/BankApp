const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid Email or Password' })
    }

    const isValidPass = await bcrypt.compare(password, user.password)

    if (!isValidPass) {
      return res.status(401).json({ message: 'Invalid Password' })
    }

    const token = jwt.sign(
      { userid: user._id, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: '2hr'
      },
      (err, token) => {
        if (err) {
          throw new Error(err)
        }
        res.cookie('userLogin', token)
        res.cookie("userId", user._id)
      }
    )

    res
      .status(200)
      .json({
        success: true,
        message: 'Authentication Successful',
        token,
        user
      })
  } catch (err) {
    console.error(err)
    res.status(404).json({
      success: false,
      msg: err.message
    })
  }
}


const creditAnotherUser = async (req, res) => {
    try{
        const {accountNumber, amount} = req.body
        const id = req.cookies.userId
        const user = await userModel.findOne({accountNumber})
        if(user){
            const recipientBalance = user.accountBalance
           const ownerOfAccount = await userModel.findById(id)
           const ownerBalance = ownerOfAccount.accountBalance
           const newBalance = ownerBalance - Number(amount)
           const newRecipientBalance = recipientBalance + Number(amount)

           if(ownerBalance > amount){
              const updatedOwnerAcct = await userModel.findOneAndUpdate({_id: id}, {
                accountBalance : newBalance
              })
             
            //  credit other user
            const updateRecipientAcct = await userModel.findOneAndUpdate({accountBalance}, {
            accountBalance: newRecipientBalance
           })

           res.status(202).json({success: true, updateRecipientAcct, updatedOwnerAcct})
           }
           else {
            throw new Error("Insufficient Funds")
           }
        }
        else {
            throw new Error("Invalid account number")
        }

    }
    catch(err){
        console.log(err.message)
        res.status(400).json({success: false, msg: err.message})
    }
}

module.exports = {
  signInUser, creditAnotherUser
}
