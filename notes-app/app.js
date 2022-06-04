
const validator = require('validator');
const chalk = require("chalk");
const yargs = require("yargs");
const msg = require("./notes.js");
const { string } = require('yargs');
const { parse } = require('path');

// const command = process.argv[2];
//console.log(process.argv);
// if(command === 'add'){
//     console.log('adding notes!');
// }
// else if(command === "remove"){
//     console.log("removing the notes!");
// }


//customize yargs version
yargs.version('1.1.0');
//add,remove,read,list
yargs.command({
    command : 'add',
    describe: 'add a new notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "notes app body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log("title: ", argv.title);
        console.log("body: ",argv.body);
    }
});

yargs.command({
    command : 'remove',
    describe: 'remove a new notes',
    handler: function(){
        console.log("removing a new note!");
    }
});
yargs.command({
    command : 'list',
    describe: 'list a notes',
    handler: function(){
        console.log("listing out all note!");
    }
});
yargs.command({
    command : 'read',
    describe: 'read a notes',
    handler: function(){
        console.log("reading a note!");
    }
})

yargs.parse();
//console.log(yargs.argv);





// const a = msg("get Notes");
// console.log(a);

// console.log(validator.isURL('https://www3schools.com'));

// const sus = chalk.bgRed.green.bold('success')
// console.log(sus );
// const add = require("./utils.js");
// const sum = add(7,3);
// console.log(sum);

