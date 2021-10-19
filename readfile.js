const http = require('http');
const fs=require('fs')
var app = http.createServer((req, res) => {
    fs.readFile('index.html',(err,data)=>
    {
        res.writeHead(200, { 'Conatent-Type': 'text/html' })
        res.write(data);
        res.end();
    })
   
});
app.listen(3000)