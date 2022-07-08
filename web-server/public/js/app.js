console.log('client side js is loaded');

// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc = search.value;
    message1.textContent = 'Loading..'
    message2.textContent = ''
    fetch('http://localhost:3000/weather?provience='+loc).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            message1.textContent=data.error;
        }
        else{
            message1.textContent=data.forecast.latitude;
            message2.textContent=data.provience
            console.log(data.forecast);
        }
    })
})
})

