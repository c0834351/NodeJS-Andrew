require('../src/db/mongoose')
const Homework = require('../src/models/homework')

//promises chaining
// Homework.findByIdAndDelete('62ce3e0dc2f5c72109cf9353').then((task)=>{
//     console.log(task + ' Deleted');
//     Homework.countDocuments({completed: true}).then((result)=>{
//         console.log(result);
//     })
// }).catch((e)=>{
//     console.log(e);
// })

const deleteHomeworkAndCount = async (id) => {
    const deleteHomework = await Homework.findByIdAndDelete(id)
    const count = await Homework.countDocuments({completed: false})
    return count
}

deleteHomeworkAndCount('62ce70efb469b8082e618c6b').then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})