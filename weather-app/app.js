const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=a89f3bbe7b17970ee24216fa0509f9a0&query=New%20York&units=f'

request({url: url, json: true}, (error,response) => {
    console.log("In order to print in fahrenheit f or celsius m or kelvin s we use some units end of our url");
    console.log("It is currently : " +response.body.current.temperature + " out. But feels like : " +response.body.current.feelslike + " out");
    console.log("curently it is: " + response.body.current.weather_descriptions[0]);
})