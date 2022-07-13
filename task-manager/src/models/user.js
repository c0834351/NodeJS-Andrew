const mongoose = require('mongoose')
const validator = require('validator')


//creating the model with arguments
const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
//      minlength: 7, //or in if statement
        trim: true,
        validate(value){
            if(value.length < 7 || value.toLowerCase().includes('password'))
            throw new Error('Your password must be more than 6 letters and it should not be password')
        }


    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})



module.exports = User 