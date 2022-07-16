require('../src/db/mongoose')
const User = require('../src/models/user')

//promises chaining
// User.findByIdAndUpdate('62ce6d61fe90357aec60ba4d', {age: 5}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age: 5})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })


//async-await
const updateAgeOfUserAndCount = async (id, age)=>{
    const user = await User.findByIdAndUpdate(id,{ age })
    const count = await User.countDocuments({ age : 5})
    return count
}

updateAgeOfUserAndCount('62ce3d2dfa708fd277b370e2', 23).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);

})