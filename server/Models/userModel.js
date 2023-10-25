const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        required:true,
        enum: ['admin', 'staff', 'customer']
    }
})

// model
const userModel = mongoose.model('UserModel', userSchema)

module.exports = userModel