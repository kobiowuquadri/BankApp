const Admin = require("../../models/adminModel");
const bycrpt = require("bcryptjs");


const validatePassword = (req, res, next) => {
  //check for empty request first
  if (Object.keys(req.body).length === 0)
    return res.status(400).send("empty body request");

  //okay valid password
  return next();
};


const checkPassword = async (req, res, next) => {
  try {
    //get admin
    const admin = await Admin.findById(req.body.id);
    //compare password
    const isPassword = await bycrpt.compare(
      req.body.oldPassword,
      admin.password
    );

    if (isPassword) {
      //okay right password
      return next();
    } else {
      return res.status(400).send("Wrong old password");
    }
  } catch (error) {
    return res.status(500).send("Ooops!! Something Went Wrong, Try again...");
  }
};

module.exports = {
  validatePassword,
  checkPassword,
};
