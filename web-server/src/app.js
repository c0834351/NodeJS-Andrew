const express = require('express')

const app = express()

//app.com
//app.com/help
//app.com/about

app.get('', (req,res)=> {
    res.send('<h1>Hello! This is Weather app!</h1>')
})
app.get('/help', (req,res)=> {
    res.send('Help Page!');
})
app.get('/about', (req,res)=> {
    res.send('About Page!');
})
app.get('/weather',(req,res)=>{
    res.send(
     [{provience: 'Ontario',temperature: 30},{provience: 'Quebec', temperature: 25}])
})

app.listen(3000,()=>{
    console.log('server is on port 3000');
})