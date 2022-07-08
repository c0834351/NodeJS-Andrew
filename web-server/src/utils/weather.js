
//USING callback functions
const request = require('request')

// const forecast = (location, callbackFunc) => {
//     const url = 'http://api.weatherstack.com/current?access_key=a89f3bbe7b17970ee24216fa0509f9a0&query=' + encodeURIComponent(location) + '&units=f';
//     request({url: url, json: true}, (error,response)=>{
//         if(error){
//             callbackFunc('unable to connect to weather stack app', undefined)
//         }
//         else if(response.body.error){
//             callbackFunc('unable to find location', undefined)
//         }
//         else{
//             callbackFunc(undefined, {
//                 country: response.body.location.country,
//                 latitude: response.body.location.lat,
//                 longitude: response.body.location.lon
//             })
//         }
//     })
// }


//destructuring and shorthand
const forecast = (location, callbackFunc) => {
    const url = 'http://api.weatherstack.com/current?access_key=a89f3bbe7b17970ee24216fa0509f9a0&query=' + encodeURIComponent(location) + '&units=f';
    request({url, json: true}, (error,{body})=>{
        if(error){
            callbackFunc('unable to connect to weather stack app', undefined)
        }
        else if(body.error){
            callbackFunc('unable to find location', undefined)
        }
        else{
            callbackFunc(undefined, {
                country: body.location.country,
                latitude: body.location.lat,
                longitude: body.location.lon
            })
        }
    })

}



module.exports = forecast