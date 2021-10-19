const http =require('http');
const nm=require('nodemailer')
const transport=nm.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'anil.k@alivenow.in',
        pass:'ShilpiAnil21@'
    }
})

var mailOptios={
    from:'anil.k@alivenow.in',
    to:'sde.anilyadav@gmail.com',
    subject:'test mail',
    text:'Dummy'
}
transport.sendMail(mailOptios,(error,info)=>
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Sent',info.response);
    }
})
http.createServer((req,res)=>
{
    res.write('Emailer')

    res.end();
}).listen(3002)