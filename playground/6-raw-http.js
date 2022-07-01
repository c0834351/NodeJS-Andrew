const http = require('http')
const url = "http://api.weatherstack.com/current?access_key=a89f3bbe7b17970ee24216fa0509f9a0&query=45,-75&units=f"

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk)=>{
        data = data + chunk.toString();
    })

    response.on('end', ()=>{
        console.log(JSON.parse(data));
    })
})

request.on('error', (error) => {
    console.log('An error', error);
})
request.end();