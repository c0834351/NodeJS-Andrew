const express = require('express')
const path = require('path')
const hbs = require('hbs')
const request = require('request')
const weather = require('./utils/weather')
const geocode = require('./utils/geocode')
const forecast = require('./utils/weather')

//console.log(path.join(__dirname, '../public')); 
//console.log(__filename); //This gives the current file name i.e, app.js
//console.log(__dirname); //This gives the current directory name i.e, src

const app = express()
//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
//customizing the views directory
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setting handle bars (hbs) in express and views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//set up static directory to serve
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





//dynamic pages
app.get('/index', (req, res) => {
    res.render('index', {
        title: 'weather',
        message: 'Use this app to get details about weather!',
        name: 'snehitha'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        message: 'Regarding the weather app!',
        name: 'snehitha'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'Contact us to get HELP!',
        name: 'snehitha'
    })
})
app.get('/products', (req, res) => {

    if (!req.query.search) {
        res.send('You mush provide a search term')
    }
    else {
        console.log(req.query.search);
        res.send({
            product: 'milk'
        })
    }

})
app.get('/weather', (req, res) => {
    if (!req.query.provience) {
        return res.send({
            error: 'Please provide provience'
        })
    }
    geocode(req.query.provience, (error, {name } = {} )=>{
        if(error){
           return res.send({ error })
        }
        forecast(name, (error, forecastData)=>{
            if(error){
               return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                provience: req.query.provience
            })
        })
    })

    // res.send(
    //     { 
    //         provience: 'Ontario', 
    //         temperature: 30,
    //         address: req.query.provience })
})

app.get('/help/*', (req, res) => {
    res.render('error404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'snehitha'
    })
})

app.get('*', (req, res) => {
    res.render('error404', {
        title: '404',
        errorMessage: '404 Page Not Found',
        name: 'snehitha'
    })
})



// app.get('/weather',(req,res)=>{
//     res.send(
//      [{provience: 'Ontario',temperature: 30},{provience: 'Quebec', temperature: 25}])
// })

app.listen(3000, () => {
    console.log('server is on port 3000');
})