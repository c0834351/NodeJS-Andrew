
//USING callback functions
const request = require('request')

const geocode = (address, callbackFunc) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=6fff9674b9424e67ed143d775b5cc8d9&query=1600%20Pennsylvania%20Ave%20NW,' + encodeURIComponent(address)
        request({url: url, json: true}, (error, response) => {
            if(error){
                callbackFunc('unable to connect to posiion stack app', undefined)
            }
            else if(response.body.error){
                callbackFunc('unable to find location', undefined)
            }
            else{
                callbackFunc(undefined, {
                    latitude: response.body.data[0].latitude,
                    longitude: response.body.data[0].longitude,
                    name: response.body.data[0].name
                })
            }
        })
    }

    module.exports = geocode;