//CRUD create read update delete

   const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId  = mongodb.ObjectId
const {MongoClient, ObjectId} = mongodb


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.toHexString());
console.log(id.getTimestamp());
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('unable to connect to database');
    }
    const db = client.db(databaseName)

    //INSERTING ONE
    db.collection('users').insertOne({
        _id: id,
        name: 'Gautham',
        age: 27
    }, (error, result) => {
        if(error){
            return console.log('unable to insert data');
        }
        console.log('data');
        console.log(result.insertedId.toHexString());
    })

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

})
