const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=a89f3bbe7b17970ee24216fa0509f9a0&query=New%20York'

request({url: url}, (error,response) => {

    const data = JSON.parse(response.body)
    console.log(data.current.temperature);
})