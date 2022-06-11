const fs = require('fs');


// const book = {
//     title: "Ego of the family",
//     author: "Ryan Holiday"
// }

//it converts the javascript object to json-string
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('jsondata.json', bookJSON)
// console.log(bookJSON);

//json-string to javascriptobject
// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);


//read the following file
// const dataBuffer=fs.readFileSync('jsondata.json'); // we get in bytes
// const data = dataBuffer.toString();// converting bytes to string
// const dataJSON = JSON.parse(data);// string to json data
// console.log(dataJSON.title);

//exercise
const dataBuffer = fs.readFileSync('jsondata.json');
const stringData = dataBuffer.toString();
const data = JSON.parse(stringData);
data.name ="pavan";
data.age = 26;

const jsondata = JSON.stringify(data);
fs.writeFileSync('jsondata.json',jsondata );
