const notes = require('./notes.js');
const yargs = require("yargs");

//customize yargs version
yargs.version('1.1.0');

//ADDING NOTES
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
    // handler: function(argv){
    //     notes.addNote(argv.title,argv.body)
    // }
    //short-form syntax
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
});

//REMOVING NOTES
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
    // handler: function(argv){
    //     notes.removeNote(argv.title)
    // }
    handler(argv){
        notes.removeNote(argv.title)
    }
});
//LISTING NOTES
yargs.command({
    command : 'list',
    describe: 'list a notes',
    // handler: function(){
    //     console.log("listing out all note!");
    // }
    handler(){
        notes.allNotes();
    }
});
//READING NOTES
yargs.command({
    command : 'read',
    describe: 'read a notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function(){
    //     console.log("reading a note!");
    // }
    handler(argv){
        notes.readNotes(argv.title);
    }
})

yargs.parse();
