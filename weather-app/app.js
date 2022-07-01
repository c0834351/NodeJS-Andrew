const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/weather')

// const url = 'http://api.weatherstack.com/current?access_key=a89f3bbe7b17970ee24216fa0509f9a0&query=New%20York&units=f'
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("unable to connect to weatherstack app");
//     }
//     else if(response.body.error){
//         console.log("error in query");
//     }
//     else {
//         console.log("In order to print in fahrenheit f or celsius m or kelvin s we use some units end of our url");
//         console.log("It is currently : " + response.body.current.temperature + " out. But feels like : " + response.body.current.feelslike + " out");
//         console.log("curently it is: " + response.body.current.weather_descriptions[0]);
//     }
// })


//*******************GEOCODING***********************

// const geocodingURL = 'http://api.positionstack.com/v1/forward?access_key=6fff9674b9424e67ed143d775b5cc8d9&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC';
// request({ url: geocodingURL, json: true }, (error, response) => {
//     if (error) {
//         console.log("uable to connect to positionstack app");
//     }
//     else if(response.body.error){
//         console.log("unable to reach the location");
//     }
//     else {
//         console.log("lattitude is: " + response.body.data[0].latitude);
//         console.log("longitude is: " + response.body.data[0].longitude);
//     }
// })

//to take country name from console
const country = process.argv[2];

if(!country){
    console.log('please enter the country name');
}
else{
    // Geocode callback function
// geocode(country, (error, data) =>{
//     if(error){
//         return console.log(error);
//     }
//     forecast(data.country, (error, forecastData) => {
//         if(error){
//             return console.log(error);
//         }
//         console.log(data.name);
//         console.log('data: ', forecastData)
//       })
// })

//converting the code using destructuring
geocode(country, (error, {name } = {}) =>{
    if(error){
        return console.log(error);
    }
    forecast(name, (error, forecastData) => {
        if(error){
            return console.log(error);
        }
        console.log( name);
        console.log('data: ', forecastData)
       
        
      })
})

}




//Exercise: Forecast

// Goal: Create a reusable function for getting the forecast
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast('New York', (error, data) => {
//     console.log('Error', error)
//     console.log('country: ', data)
   
    
//   })
