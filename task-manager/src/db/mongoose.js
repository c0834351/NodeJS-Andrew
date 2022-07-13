
const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

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
//creating new instance of the model
// const userCreate = new User({
//     name: 'Snehitha',
//     email: 'Snehitha@GMAIL.COM',
//     password: 'SN123@hi'
// })

//saving in mongodb
// userCreate.save().then(()=>{
//     console.log(userCreate);
// }).catch((error)=>{
//     console.log('Error: '+ error);
// })

//Exercise
const Homework = mongoose.model('Homework',{
    subject: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    
    }
})
const createHomework = new Homework({
    subject: ' Mathematics '
})

createHomework.save().then(()=>{
    console.log(createHomework);
}).catch((error)=>{
    console.log('Error: '+error);
})

