const fs = require('fs');
//Library
//fs - file system module

//Read file content
fs.readFile('example.txt', 'utf8', (err, data) => {
    // utf8 - For coding and debugging
    //(err, data) passing 2 parameters
    if (err) throw err;
    console.log(data);
});