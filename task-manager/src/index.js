const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Homework = require('./models/homework')
const userRouter = require('./routers/user')
const homeworkRouter = require('./routers/homework')

const app = express()
const port = process.env.PORT || 3000

//this automatically convert the coming json to object
app.use(express.json())

app.use(userRouter)
app.use(homeworkRouter)

app.listen(port, ()=>{
    console.log('Server is up on port : ' + port);
})

