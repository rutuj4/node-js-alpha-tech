/*
//1. Hello World
console.log('Hello World');
*/

/*
//2. Read a file
const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
})
*/

/*
//3. Create and write in a file

const fs = require('fs');

fs.writeFile('test.txt', 'Rutuj Shah', (err) => {
    if(err) throw err;
    console.log('File succesfully created and the data has being entered.')
})
*/

//4. Server
const http = require('http');

//Create a server
const server = http.createServer((req, res) => {
    // req -> Request
    // res -> Response 
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello from Node.js!')
});

// Listen to port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/')
});