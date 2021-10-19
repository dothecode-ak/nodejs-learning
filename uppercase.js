const http=require('http');
const uc=require('upper-case');
http.createServer((req,res)=>
{
    res.write(uc.upperCase('anil yadav'));
    res.end();
}).listen(3003)