
const express=require('express');
const ejs=require('ejs');
var app=express();
app.set('view engine','ejs')
var router =express.Router();
const checkUrl =require('./middleware')
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
    res.send('Sign up page')
})
app.use('/',router)
app.listen(3000,()=>
{
    console.log('Server is running');
})