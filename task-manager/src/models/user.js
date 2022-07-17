const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthTokens = async function(){
    const user = this
    const token = jwt.sign({_id : user._id.toString()},'thisismynewcourse')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token

}

userSchema.statics.findByCredentials = async (email, password)=>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('Unable to login')
    }
    const isMatch = await bcryptjs.compare(password, user.password)
    if(!isMatch){
        throw new Error('unable to login')
    }
    return user
}

//Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if(user.isModified('password')){
        user.password = await bcryptjs.hash(user.password, 8)
    }
    next()
})

//creating the model with arguments
const User = mongoose.model('User',userSchema)



module.exports = User 