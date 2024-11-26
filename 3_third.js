//Creating and writing in a file

const fs = require('fs');


//Write content to a file

fs.writeFile('output.txt','Rutuj ', (err) => {
    if (err) throw err;
    console.log('File has been created adn text has been written.')
});