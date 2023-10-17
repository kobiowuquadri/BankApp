const mongoose = require("mongoose");

//Define User Schema
const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: [true, "Please Type A User Name!"],
    },
    email: {
      type: String,
      required: [true, "Please Type An Email!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Type A Password!"],
    },
    phone: {
      type: Number,
      required: [true, "Please Type A Phone Number!"],
      unique: true,
    },
    
  },
  {
    timestamps: true,
    collection: "Users",
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
