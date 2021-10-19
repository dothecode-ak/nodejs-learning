const checkUrl=(req,res,next)=>
{
    console.log('Current URL',req.originalUrl);
    next();
}
module.exports=checkUrl;