const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Homework = require('./models/homework')

const app = express()
const port = process.env.PORT || 3000

//this automatically convert the coming json to object
app.use(express.json())

app.post('/users',(req,res)=>{
    const user = new User(req.body)

    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((error)=>{
        res.status(400).send('Error :'+error)
    })
})

//Exercise

app.post('/homework',(req,res)=>{
    const homework = new Homework(req.body)

    homework.save().then(()=>{
        res.status(201).send(homework)
    }).catch((error)=>{
        res.status(400).send('Error : '+error)
    })
})

app.listen(port, ()=>{
    console.log('Server is up on port : ' + port);
})

