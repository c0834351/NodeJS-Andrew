const notes = require('./notes.js');
const yargs = require("yargs");

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
        notes.addNote(argv.title,argv.body)
    }
});

//REMOVE
yargs.command({
    command : 'remove',
    describe: 'remove a new notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
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
