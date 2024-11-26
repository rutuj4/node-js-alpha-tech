var http = require('http');
var dt = require('./m');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
        <html>
            <head>
                <meta http-equiv="refresh" content="1">
            </head>
            <body>
                <h1>Current date & time: ${dt.myDateTime()}</h1>
            </body>
        </html>
    `);

    res.end();
}).listen(8080, () => console.log("Server is running on http://localhost:8080"));