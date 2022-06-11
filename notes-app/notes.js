//exercise-2

// const msg = function getNotes(a){
//     return a;}
// module.exports = msg;
const fs = require('fs');
const { title } = require('process');

const getNotes = function () {
    return "your notes";
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("New Notes added!");
    }
    else{
        console.log("Have duplicate title");
    }
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON, {flag: "a"});
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.js');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}