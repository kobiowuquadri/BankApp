const Account = require("../../models/accountModel");

const checkAccount = async (req, res, next) => {
  if (req.body.from === req.body.to) {
    return res
      .status(400)
      .send("Invalid Account Id!, Make Sure you type Another Account Id.");
  }

  let account;

  try {
    //get account
    account = await Account.findById(req.params.to_id);

    //check for account being exist.
    if (!account) {
      return res
        .status(400)
        .send(
          "The Account you Sending to is Not Exist!, Make Sure you type Correctly"
        );
    } else {
      //okay valid account to proceed
      return next();
    }
  } catch (error) {
    if (!account) {
      return res
        .status(400)
        .send(
          "The Account you Sending to is Not Exist!, Make Sure you type Correctly"
        );
    }
    return res.status(500).send("Ooops!! Something Went Wrong, Try again...");
  }
};

module.exports = {
  checkAccount,
};
