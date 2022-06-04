
const validator = require('validator');
const chalk = require("chalk");
const msg = require("./notes.js");


const a = msg("get Notes");
console.log(a);

console.log(validator.isURL('https://www3schools.com'));

const sus = chalk.bgRed.green.bold('success')

console.log(sus);
// const add = require("./utils.js");
// const sum = add(7,3);
// console.log(sum);

