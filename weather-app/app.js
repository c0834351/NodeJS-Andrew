const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=a89f3bbe7b17970ee24216fa0509f9a0&query=New%20York&units=f'


request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("unable to connect to weatherstack app");
    }
    else if(response.body.error){
        console.log("error in query");
    }
    else {
        console.log("In order to print in fahrenheit f or celsius m or kelvin s we use some units end of our url");
        console.log("It is currently : " + response.body.current.temperature + " out. But feels like : " + response.body.current.feelslike + " out");
        console.log("curently it is: " + response.body.current.weather_descriptions[0]);
    }

})


//*******************GEOCODING***********************

const geocodingURL = 'http://api.positionstack.com/v1/forward?access_key=6fff9674b9424e67ed143d775b5cc8d9&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC';

request({ url: geocodingURL, json: true }, (error, response) => {
    if (error) {
        console.log("uable to connect to positionstack app");
    }
    else if(response.body.error){
        console.log("unable to reach the location");
    }
    else {
        console.log("lattitude is: " + response.body.data[0].latitude);
        console.log("longitude is: " + response.body.data[0].longitude);
    }
})



