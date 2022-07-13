//Exercise
const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = Homework