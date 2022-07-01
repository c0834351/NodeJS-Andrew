const express = require('express')
const path = require('path')

//console.log(path.join(__dirname, '../public')); 
//console.log(__filename); //This gives the current file name i.e, app.js
//console.log(__dirname); //This gives the current directory name i.e, src

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath))

//This code is no use as we set up index.html, help.html, about.html
// app.get('', (req,res)=> {
//     res.send('<h1>Hello! This is Weather app!</h1>')
// })
// app.get('/help', (req,res)=> {
//     res.send('Help Page!');
// })
// app.get('/about', (req,res)=> {
//     res.send('About Page!');
// })

//setting handle bars (hbs) in express
app.set('view engine','hbs')

//
app.get('/index',(req,res)=>{
    res.render('index', {
     title: 'weather',
     name: 'snehitha'
    })
})
app.get('/about',(req,res)=>{
    res.render('about', {
     title: 'About page',
     name: 'snehitha'
    })
})

app.get('/help',(req,res)=>{
    res.render('help', {
        title: 'Help',
        message: 'Send mails'
    })
})


// app.get('/weather',(req,res)=>{
//     res.send(
//      [{provience: 'Ontario',temperature: 30},{provience: 'Quebec', temperature: 25}])
// })

app.listen(3000,()=>{
    console.log('server is on port 3000');
})