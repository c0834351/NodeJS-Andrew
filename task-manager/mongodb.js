//CRUD create read update delete

   const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId  = mongodb.ObjectId
const {MongoClient, ObjectId} = mongodb


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
// console.log(id.toHexString());
// console.log(id.getTimestamp());
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('unable to connect to database');
    }
    const db = client.db(databaseName)

    //INSERTING ONE
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Gautham',
    //     age: 27
    // }, (error, result) => {
    //     if(error){
    //         return console.log('unable to insert data');
    //     }
    //     console.log('data');
    //     console.log(result.insertedId.toHexString());
    // })

    // INSERTING MANY
    // db.collection('users').insertMany(
    //     [{
    //         name: 'tripsy',
    //         age: 4
    //     },{
    //         name: 'oreo',
    //         age: 2
    //     }], (error,result) => {
    //         if(error){
    //             return console.log('unable to insert data');
    //         }
    //         console.log(result.acknowledged);
    //     }
    // )

    //Exercise
    // db.collection('homeworks').insertMany(
    //     [{
    //         subject: 'Maths',
    //         completed: true
    //     },{
    //         subject: 'English',
    //         completed: true
    //     },{
    //         subject: 'Social Studies',
    //         completed: false
    //     }], (error, result) =>{
    //         if(error){
    //             return console.log('unable to insert tasks');
    //         }
    //         console.log(result.acknowledged);
    //     }
    // )

    //READING DATA
    // db.collection('users').findOne({_id: ObjectId("62cd3c71e01dfdd084ba24c7")}, (error, user)=>{
    //     if(error){
    //        return console.log('unable to fetch data');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({age: 25}).toArray((error,data) => {
    //     if(error){
    //         return console.log('unable to fetch data');
    //     }
    //     console.log(data);
    // })
    // db.collection('users').find({age: 25}).count((error,count) => {
    //     if(error){
    //         return console.log('unable to fetch data');
    //     }
    //     console.log(count);
    // })

    //Exercise
    // db.collection('homeworks').findOne({_id: ObjectId('62cd3555c1326a3ccd646465')}, (error, works)=>{
    //     if(error){
    //         return console.log('unable to fetch data');
    //     }
    //     console.log(works);
    // })
    // db.collection('homeworks').find({completed: true}).toArray((error, done)=>{
    //     console.log("Tasks which are completed : ");
    //     console.log(done);
    // })

    //UPDATING THE DATA
    // const updatePromise = db.collection('users').updateOne({_id: ObjectId('62cd32dc8ad0fc1b250f6f89')},
    // {
    //     $inc: {
    //         age: 1
    //     }
    // } )
    // updatePromise.then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    //UPDATING MANY DATA
    // const updateManyPromise = db.collection('homeworks').updateMany({completed: false},
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     })
    //     updateManyPromise.then((result)=> {
    //         console.log('updated successfully');
    //     }).catch((error)=>{
    //         console.log('Not Updated!');
    //     })

    //DELETING MANY DATA
    // const deletePromise = db.collection('users').deleteMany({age: 25})
    // deletePromise.then(()=>{
    //     console.log("Deleted successfully!");
    // }).catch((error)=>{
    //     console.log('Unsuccessfull! '+ error);
    // })

    //DELETING ONE DATA
    db.collection('homeworks').deleteOne({_id: ObjectId('62cd3555c1326a3ccd646465')}).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
})
