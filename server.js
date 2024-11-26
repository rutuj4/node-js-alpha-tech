const http = require('http');

//Create a server 
const server = http.createServer((req, res) => {
    // req -> request
    // res -> response
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello from Noed.js!');
});

//Listen on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
});