const http = require('http');
var data = [{ name: 'Anil', age: 28 },{ name: 'Sunil', age: 25 }]
var app = http.createServer((req, res) => {
    res.writeHead(200, { 'Conatent-Type': 'application\json' })
    res.write(JSON.stringify(data));
    res.end();
});
app.listen(3000)