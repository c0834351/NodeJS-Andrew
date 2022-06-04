const fs = require("fs");

fs.writeFileSync("notes.txt","This file is created bu node.js")
fs.appendFileSync("notes.txt","This is the second line");