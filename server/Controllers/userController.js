const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const period = 1000 * 60 * 60 * 24 * 3

const signInUser = async (req, res) => {
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
        res.cookie('userId', user._id, { maxAge: period, httpOnly: true });
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



const creditAnotherUser = async (req, res) => {
  try {
      const { accountNumber, amount } = req.body;
      const id = req.cookies.userId;
      const user = await userModel.findOne({ accountNumber });

      if (user) {
          const recipientBalance = user.accountBalance;
          const ownerOfAccount = await userModel.findById(id);

          if (ownerOfAccount) {
              const ownerBalance = ownerOfAccount.accountBalance;
              const newBalance = ownerBalance - Number(amount);
              const newRecipientBalance = recipientBalance + Number(amount);

              if (ownerBalance >= amount) {
                  const updatedOwnerAcct = await userModel.findOneAndUpdate(
                      { _id: id },
                      { accountBalance: newBalance }
                  );

                  // Credit other user
                  const updateRecipientAcct = await userModel.findOneAndUpdate(
                      { accountNumber },
                      { accountBalance: newRecipientBalance }
                  );

                  res.status(202).json({
                      success: true,
                      updateRecipientAcct,
                      updatedOwnerAcct,
                  });
              } else {
                  throw new Error("Insufficient Funds");
              }
          } else {
              console.log(`Owner account not found for ID: ${id}`);
              throw new Error("Owner account not found");
          }
      } else {
          throw new Error("Invalid account number");
      }
  } catch (err) {
      console.log(err.message);
      res.status(400).json({ success: false, msg: err.message });
  }
};


module.exports = {
  signInUser, creditAnotherUser
}
