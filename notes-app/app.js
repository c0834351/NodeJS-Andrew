
const validator = require('validator');

const msg = require("./notes.js");
const a = msg("get Notes");
console.log(a);

console.log(validator.isURL('https://www3schools.com'));


// const add = require("./utils.js");
// const sum = add(7,3);
// console.log(sum);

