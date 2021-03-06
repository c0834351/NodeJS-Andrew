// const withPromises = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        // resolve([1, 2, 3])
//         reject('Thing gone wrong!')
//     }, 2000)
// })


// withPromises.then((result)=>{
//     console.log('success : ' + result);
// }).catch((error) => {
//     console.log("Error : " +error);
// })

const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        }, 2000)
    })
}

// add(1,2).then((sum)=>{
//     console.log(sum);
//     add(sum,5).then((sum2)=>{
//         console.log(sum2);
//     }).catch((e)=>{
//         console.log(e);
//     })
// }).catch((e)=>{
//     console.log(e);
// })

//Promises chaining
add(1,1).then((sum)=>{
    console.log(sum);
    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2);
}).catch((e)=>{
    console.log(e);
})