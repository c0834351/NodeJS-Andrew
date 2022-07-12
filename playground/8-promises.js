const withPromises = new Promise((resolve, reject) => {
    setTimeout(()=>{
       // resolve([1, 2, 3])
        reject('Thing gone wrong!')
    }, 2000)
})

withPromises.then((result)=>{
    console.log('success : ' + result);
}).catch((error) => {
    console.log("Error : " +error);
})