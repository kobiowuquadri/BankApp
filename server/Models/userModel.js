const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    enum: ['admin', 'staff', 'customer']
  },

  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: function() {
      if(this.role == "cutomer"){
        return false
      }
      return true
    }
  },

  accountBalance:{
    type:Number,
    required: function(){
      if(this.role == "customer"){
        return true;
      }
      return false
    },
    default: 0
  },

  accountNumber: {
    type: Number,
    required: function(){
      if(this.role == "customer"){
        return true
      }
      return false
    }
  },

  address:{
    type: String,
    required: true
  },

  NIN_Number:{
    type: Number,
    required: function(){
      if(this.role == "customer"){
        return true
      }
      return false
    }
  }
}, {timestamps: true})

// model
const userModel = mongoose.model('UserModel', userSchema)

module.exports = userModel
