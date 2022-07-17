const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Homework = require('./models/homework')
const userRouter = require('./routers/user')
const homeworkRouter = require('./routers/homework')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next)=>{
//     if(req.method === 'GET'){
//         res.send('get request are disabled')
//     }else{
//         next()
//     }
    
// })
// app.use((req, res, next)=>{
//     res.status(503).send('site is currently down')
// })

//this automatically convert the coming json to object
app.use(express.json())

app.use(userRouter)
app.use(homeworkRouter)

app.listen(port, ()=>{
    console.log('Server is up on port : ' + port);
})

const myFunction = async()=> {
    //jwt
    // const token = await jwt.sign({ _id: '123abc'},'thisismynewcourse',{expiresIn: '7 days'})
    // console.log(token);

    // const data = jwt.verify(token ,'thisismynewcourse')
    // console.log(data);


    

    //hash the plain text
    // const password = 'Snehitha!'
    // const hashPassword = await bcryptjs.hash(password, 8)
    // console.log(hashPassword);

    // const isMatch = await bcryptjs.compare(password,hashPassword)
    // console.log(isMatch);
}

myFunction()