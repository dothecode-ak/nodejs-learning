const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(`
    <h1>Form data</h1>
    <input type='text'/> <br>
    <br>
    <input type='text'/>
    <br>
    <br>
    <input type='text'/>
    `);
    res.end();
}).listen(3002)