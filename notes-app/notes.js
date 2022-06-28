//exercise-2

// const msg = function getNotes(a){
//     return a;}
// module.exports = msg;
const fs = require('fs');
const chalk  = require("chalk");

// const getNotes = function () {
//     return "your notes";
// }
//with arrow function
const getNotes = ()=> {
    return "your notes";
}

//adding notes method
// const addNote = function(title, body) {
    const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title;
    // })
    // const duplicateNotes = notes.filter((note)=>{
    //     return note.title === title;
    // })
    const duplicateNotes = notes.find((note)=>{
        return note.title === title;
    })

    //if(duplicateNotes.length === 0){
        if(!duplicateNotes){
            notes.push({
            title: title,
            body: body
        });
        
        saveNotes(notes);
        console.log(chalk.green.inverse("New Notes added!"));
    }
    else{
        console.log(chalk.red.inverse("Have duplicate title"));
    }
    
}
//remove notes method
const removeNote = (title)=>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>{
       return note.title !== title
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('NOTES REMOVED'));
        saveNotes(notesToKeep);
    }
    else {
        console.log(chalk.red.inverse('NOTES NOT REMOVED'));
    }
   
}

//list of Notes
 const allNotes = ()=>{
    const notes = loadNotes();
    allListing = notes.forEach(note => {
        console.log(chalk.green.bold("all notes available are: ") + note.title.toString());
    });
 }


 //reading Notes:
 const readNotes = (title)=>{
    const notes = loadNotes();
    const findNote = notes.find((note)=> note.title === title);
    if(findNote){
        console.log(chalk.green.italic(findNote.title)+ " *** "+chalk.green(findNote.body));

    }
    else{
        console.log(chalk.red.inverse('not found!'));
    }

 }

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON );
}

const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    allNotes: allNotes,
    readNotes: readNotes
}