
const express=require('express');
const ejs=require('ejs');
const bodyParser=require('body-parser');
var bpencoder=bodyParser.urlencoded();
var app=express();
app.use('/assets',express.static('assets'))
app.set('view engine','ejs')
var router =express.Router();
const checkUrl =require('./middleware');
const { log } = require('console');
app.get('/',(req,res)=>
{
res.render('home')
});
app.get('/about',(req,res)=>
{
res.render('about')
});

app.get('/profile/:name',(req,res)=>
{
    console.log(req.params.name);
    var data={email:"sde.anilyadav@gmail.com",age:"28",skills:["JS","Nodejs","php","laravel"]}
res.render('profile',{name:req.params.name,data:data})
});
router.get('/signup',checkUrl,(req,res)=>
{
    res.render('signup')
})

app.post('/signup',bpencoder,(req,res)=>
{
console.log(req.body);
res.render('signup');
})
app.use('/',router)
app.listen(3000,()=>
{
    console.log('Server is running');
})