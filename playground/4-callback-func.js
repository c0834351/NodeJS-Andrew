

// setTimeout(()=>{
//     console.log("wait for 2 seconds");
// },2000);
// const names = ["Andrew", "dsouza","Phil", "Jimmy"]
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });
// console.log(shortNames);


//synchronous
// const geocode = (address, callbackfunc) => {
//     setTimeout(()=>{
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         return data;
//     },2000)
// }
// const data = geocode('Australia')
// console.log(data);

//asynchronous 
// const geocode = (address, callbackfunc) => {
//     setTimeout(()=>{
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callbackfunc(data);
//     }, 2000)
    
// }

// const data = geocode('Australia', (data)=>{
//     console.log(data);
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

const add = (a,b, callbackFunc) => {
    setTimeout(()=>{
        const sum = a + b;
        callbackFunc(sum);
    }, 2000)

}

add(1,4, (sum)=>{
    console.log(sum);
})